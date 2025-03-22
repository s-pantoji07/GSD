import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductCard from "./components/ProductCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

// const sampleProduct = {
//   image: "https://via.placeholder.com/150",
//   name: "Sample Product",
//   rating: 4,
//   reviews: 20,
//   originalPrice: 50,
//   discountedPrice: 40,
//   discount: 20,
// };

function Layout() {
  return (
    <div>
      <Home />
      <Categories />
      {/* <ProductCard />  */}
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
