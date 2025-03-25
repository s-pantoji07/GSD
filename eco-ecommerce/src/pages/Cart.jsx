import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Ensure it's always an array
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId"); // Ensure userId exists

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
          setCartItems(data.cart.items || []); // Ensure items exist
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

  if (loading) return <p>Loading cart...</p>;
  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.productId.image} alt={item.productId.name} width="100" />
          <h3>{item.productId.name}</h3>
          <p>Price: ₹{item.productId.price_after_discount}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
