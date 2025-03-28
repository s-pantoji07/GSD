import React, { useState } from "react";
import { placeOrder } from "../api/orderApi";
import { useLocation } from "react-router-dom";
import "../Styles/paymentPage.css"; // Assuming you have a CSS file for styling
const PaymentPage = () => {
  const location = useLocation();
  const cartTotal = location.state?.cartTotal || 0; // Ensure cartTotal is received properly
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");

  const handleOrder = async () => {
    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }
  
    try {
      const orderData = { address, paymentMode, totalAmount: cartTotal };
      const response = await placeOrder(orderData);
      alert(response.message); // "Order placed successfully"
    } catch (error) {
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

      <h3>Total Amount: ₹{cartTotal.toFixed(2)}</h3>

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default PaymentPage;
