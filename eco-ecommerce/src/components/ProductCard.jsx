import React, { useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa";
import "../styles/Productcard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Details */}
      <h3 className="product-name">{product.name}</h3>

      {/* Ratings */}
      <div className="ratings">
        {Array(5)
          .fill()
          .map((_, index) => (
            <FaStar
              key={index}
              className={index < product.rating ? "star filled" : "star"}
            />
          ))}
        <span className="review-count">({product.reviews})</span>
      </div>

      {/* Pricing */}
      <div className="price">
        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
        <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
        <span className="discount-tag">{product.discount}% OFF</span>
      </div>

      {/* Quantity & Buttons */}
      <div className="cart-actions">
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button className="add-to-cart"> Add to Cart</button>
        <button className="wishlist">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
