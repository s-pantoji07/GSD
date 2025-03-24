import { useState } from "react";
import { registerUser, loginUser } from "../api/auth";
import "../Styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        // Sign Up
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        const res = await registerUser(formData);
        alert(res.data.message);
      } else {
        // Sign In
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        alert("Login successful");
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <p>Please enter your details</p>
        <h2>{isLogin ? "Welcome back" : "Create an account"}</h2>
        <form onSubmit={handleSubmit} className={!isLogin ? "signup-form" : ""}>
          {!isLogin && (
            <>
              <div className="input-group">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name (Optional)" onChange={handleChange} />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                <input type="tel" name="mobileNumber" placeholder="Mobile Number (Optional)" onChange={handleChange} />
              </div>
              <div className="input-group">
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
              </div>
              <div className="input-group">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
              <div className="terms-container">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>
            </>
          )}
          {isLogin && (
            <>
              <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              <div className="remember-forgot">
                <a href="#">Forgot password?</a>
              </div>
            </>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Sign in" : "Sign up"}
          </button>
        </form>
        <p className="toggle-auth">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up" : " Sign in"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
