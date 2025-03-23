import { useState } from "react";
import "../Styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <p>Please enter your details</p>
        <h2>{isLogin ? "Welcome back" : "Create an account"}</h2>
        <form className={!isLogin ? "signup-form" : ""}>
          {!isLogin && (
            <>
              <div className="input-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name (Optional)" />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Mobile Number (Optional)" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="terms-container">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>
            </>
          )}
          {isLogin && (
            <>
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <div className="remember-forgot">
                <a href="#">Forgot password?</a>
              </div>
            </>
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Sign in" : "Sign up"}
          </button>
        </form>
        <button className="google-button">
          <img
            src="https://imgs.search.brave.com/D6k78JcHUcNi1Z715LvojXGTDPsSGdGN1edYylkqYq0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDZPMm9HenYt/L3RoZW1lL2Rhcmsv/c3ltYm9sLnN2Zz9j/PTFieGlkNjRNdXA3/YWN6ZXdTQVlNWCZ0/PTE3MzE5MTE0OTc1/MjI"
            alt="Google"
          />
          Sign in with Google
        </button>
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
