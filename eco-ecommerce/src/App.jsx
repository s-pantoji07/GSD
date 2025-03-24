import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Auth from "./pages/Auth";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const REDIRECT_DELAY = 5000; // 1 second

function Layout() {
  return (
    <div>
      <Home />
      <Categories />
    </div>
  );
}

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavbarRoutes = ["/auth"];

  useEffect(() => {
    const checkSession = () => {
      const token = localStorage.getItem("token");
      const loginTimestamp = localStorage.getItem("loginTimestamp");

      if (token && loginTimestamp) {
        const timeElapsed = Date.now() - parseInt(loginTimestamp, 10);
        if (timeElapsed > SESSION_TIMEOUT) {
          localStorage.removeItem("token");
          localStorage.removeItem("loginTimestamp");
          navigate("/auth");
        }
      } else {
        setTimeout(() => {
          navigate("/auth");
        }, REDIRECT_DELAY);
      }
    };

    checkSession();
  }, [navigate]);

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;