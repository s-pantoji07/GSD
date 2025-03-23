import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa"; // Ensure react-icons is installed
import "../styles/Productcard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Ensure product is not undefined
  if (!product) {
    return <p>Loading product...</p>;
  }

  // Calculate total price based on quantity
  const totalPrice = (product?.price_after_discount || 0) * quantity;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-container">
        <img src={product?.image} alt={product?.name} />
      </div>

      {/* Product Details */}
      <h3 className="product-name">{product?.name}</h3>

      {/* Ratings */}
      <div className="ratings">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={index < (product?.review || 0) ? "star filled" : "star"}
          />
        ))}
        <span className="review-count">({product?.review || 0})</span>
      </div>

      {/* Pricing */}
      <div className="price">
        <span className="original-price">
          ${product?.price_before_discount?.toFixed(2) || "0.00"}
        </span>
        <span className="discounted-price">
          ${totalPrice.toFixed(2)}
        </span>
        <span className="discount-tag">{product?.discount ?? 0}% OFF</span>
      </div>

      {/* Quantity & Buttons */}
      <div className="cart-actions">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button className="add-to-cart">Add to Cart</button>
        <button className="wishlist">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
