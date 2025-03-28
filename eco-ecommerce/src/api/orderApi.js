import axios from "axios";

export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post("/api/orders", orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Send JWT token
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
