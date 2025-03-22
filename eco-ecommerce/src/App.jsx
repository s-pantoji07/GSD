import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductCard from "./components/ProductCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const sampleProduct = {
  image: "https://via.placeholder.com/150",
  name: "Sample Product",
  rating: 4,
  reviews: 20,
  originalPrice: 50,
  discountedPrice: 40,
  discount: 20,
};

function Layout() {
  return (
    <div>
      <Home />
      <Categories />
      {/* <ProductCard product={sampleProduct} />  */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
