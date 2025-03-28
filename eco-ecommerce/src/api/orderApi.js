import axios from "axios";

export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post("http://localhost:5000/api/orders", orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to place order" };
  }
};
