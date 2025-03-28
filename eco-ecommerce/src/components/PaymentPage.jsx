import React, { useState, useEffect } from "react";
import { placeOrder } from "../api/orderApi";
import { useLocation } from "react-router-dom";
import "../Styles/paymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const cartTotal = location.state?.cartTotal || 0;

  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [deliveryCharge, setDeliveryCharge] = useState(50);

  const handleDeliveryChange = (e) => {
    setDeliveryCharge(Number(e.target.value));
  };

  const handleOrder = async () => {
    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("User not logged in. Please log in first.");
      return;
    }

    const orderData = {
      address,
      paymentMode,
      deliveryCharge,
      totalAmount: cartTotal + deliveryCharge,
    };

    console.log("Order Data Before Sending:", orderData);

    try {
      const response = await placeOrder(orderData);
      alert(response.message || "Order placed successfully!");
    } catch (error) {
      console.error("Order API Error:", error);
      alert(error.message || "Failed to place order. Try again!");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      <label>Delivery Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <label>Payment Mode:</label>
      <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="Online">Online</option>
      </select>

      <label>Delivery Options:</label>
      <select
        id="delivery-options"
        value={deliveryCharge}
        onChange={handleDeliveryChange}
        className="delivery-dropdown"
      >
        <option value={50}>Immediate Delivery - ₹50</option>
        <option value={20}>After 1 Hour - ₹20</option>
      </select>

      <h3>Total Amount: ₹{cartTotal} + ₹{deliveryCharge} = ₹{cartTotal + deliveryCharge}</h3>

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default PaymentPage;
