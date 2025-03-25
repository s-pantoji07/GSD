import axios from "axios";

const API_URL = "http://localhost:5000/api/cart"; // Adjust according to your backend URL

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { userId, productId, quantity });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
};

export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
};
export const removeFromCart = async (userId, itemId) => {
  try {
      const response = await axios.delete(`${API_URL}/${userId}/${itemId}`); // Use itemId
      return response.data;
  } catch (error) {
      console.error("Error removing item from cart:", error);
      return { success: false };
  }
};
export const updateCartItem = async (userId, itemId, quantity) => {
  const response = await fetch(`http://localhost:5000/api/cart/update/${userId}/${itemId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
  });
  return response.json();
};
