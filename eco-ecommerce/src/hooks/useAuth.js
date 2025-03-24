import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loginTime = localStorage.getItem("loginTime");
    const currentTime = new Date().getTime();

    if (token && loginTime) {
      const elapsedTime = currentTime - parseInt(loginTime, 10);
      
      // If more than 1 hour (3600000ms), log out
      if (elapsedTime > 3600000) {
        localStorage.removeItem("token");
        localStorage.removeItem("loginTime");
        navigate("/auth");
      }
    } else {
      // If user is not logged in, redirect after 15 seconds
      setTimeout(() => {
        navigate("/auth");
      }, 15000);
    }
  }, [navigate]);
};

export default useAuth;
