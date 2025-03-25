import React, { useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard"; // Import component
import "../Styles/Cart.css"; // Import styles
import { getCart, updateCartItem, removeFromCart } from "../api/cartApi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.warn("No userId found. Redirecting to login.");
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
        const data = await response.json();

        if (data.success && data.cart) {
          setCartItems(data.cart.items || []);
        } else {
          console.error("Cart data format is incorrect:", data);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);



  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this item from the cart?");
    if (!confirmDelete) return;

    try {
        const data = await removeFromCart(userId, itemId); // Pass itemId instead of productId

        if (data.success) {
            setCartItems(cartItems.filter((item) => item._id !== itemId)); // Ensure comparison uses item._id
            alert("Item successfully removed from cart.");
        } else {
            alert("Failed to remove item. Please try again.");
        }
    } catch (error) {
        console.error("Error deleting item:", error);
        alert("An error occurred. Please try again later.");
    }
};

  

  
  const handleUpdate = async (itemId, newQuantity) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/update/${userId}/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      const data = await response.json();
      if (data.success) {
        setCartItems(cartItems.map((item) => (item._id === itemId ? { ...item, quantity: newQuantity } : item)));
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (loading) return <p>Loading cart...</p>;
if (cartItems.length === 0) 
  return <div className="empty-cart">Your cart is empty.</div>;


  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <CartItemCard key={item._id} item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default Cart;
