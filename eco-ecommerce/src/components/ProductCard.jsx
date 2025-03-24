import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { addToCart } from "../api/cartApi"; // Import API function
import "../styles/Productcard.css";

const ProductCard = ({ product, userId }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Loading product...</p>;

  const totalPrice = (product?.price_after_discount || 0) * quantity;

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart.");
      navigate("/auth");
      return;
    }
  
    // Proceed with adding the item to the cart
    console.log("Item added to cart successfully");
  };
  
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product?.image} alt={product?.name} />
      </div>
      <h3 className="product-name">{product?.name}</h3>

      <div className="ratings">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className={index < (product?.review || 0) ? "star filled" : "star"} />
        ))}
        <span className="review-count">({product?.review || 0})</span>
      </div>

      <div className="price">
        <span className="original-price">${product?.price_before_discount?.toFixed(2) || "0.00"}</span>
        <span className="discounted-price">${totalPrice.toFixed(2)}</span>
        <span className="discount-tag">{product?.discount ?? 0}% OFF</span>
      </div>

      <div className="cart-actions">
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="wishlist"><FaHeart /></button>
      </div>
    </div>
  );
};

export default ProductCard;
