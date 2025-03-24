import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [message, setMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let successMessage = "";
      if (!isLogin) {
        if (formData.password !== formData.confirmPassword) {
          setMessage("Passwords do not match");
          return;
        }
        const res = await registerUser(formData);
        successMessage = res.data.message;
      } else {
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        successMessage = "Login successful";
        
        // Store token and timestamp
        const loginTime = new Date().getTime();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("loginTime", loginTime);
      }
  
      setMessage(successMessage);
  
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };
  
  

  return (
    <div className="auth-page">
      <div className="auth-container">
        {message && <div className="alert-message">{message}</div>} {/* Display message */}
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
          <a href="/" onClick={(e) => {
            e.preventDefault();
            setIsLogin(!isLogin);
          }}>
            {isLogin ? " Sign up" : " Sign in"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
