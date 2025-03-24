import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SESSION_TIMEOUT = 60 * 60 * 1000; // 1 hour in milliseconds
const REDIRECT_DELAY = 15000; // 15 seconds

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loginTimestamp = localStorage.getItem("loginTimestamp");

    if (token && loginTimestamp) {
      const timeElapsed = Date.now() - parseInt(loginTimestamp, 10);
      
      if (timeElapsed > SESSION_TIMEOUT) {
        // Session expired, log out user
        localStorage.removeItem("token");
        localStorage.removeItem("loginTimestamp");
        navigate("/auth");
      }
    } else {
      // No token found, redirect after 15 seconds
      const redirectTimer = setTimeout(() => {
        navigate("/auth");
      }, REDIRECT_DELAY);

      return () => clearTimeout(redirectTimer);
    }
  }, [navigate]);
};

export default useAuth;
