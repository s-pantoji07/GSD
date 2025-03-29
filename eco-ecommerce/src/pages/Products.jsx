import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Import the ProductCard component
import "../Styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category); // Fetch products for the specific category
    } else {
      fetchAllProducts(); // Fetch all products if no category is specified
    }
  }, [category]);

  const fetchProductsByCategory = async (categoryName) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products?category=${categoryName}`);
      
      // Log response to see what's coming from the server
      const text = await response.text();
      console.log("Raw Response:", text);
  
      // Attempt to parse JSON
      const data = JSON.parse(text);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      
      // Log response to see what's coming from the server
      const text = await response.text();
      console.log("Raw Response:", text);
  
      // Attempt to parse JSON
      const data = JSON.parse(text);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  return (
    <div className="products-container">
      <h2>{category ? `Products in ${category}` : "All Products"}</h2>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
