const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { address, paymentMode, totalAmount } = req.body;
    const userId = req.user.id; // Get user ID from request

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    if (!address || !paymentMode || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({ userId, address, paymentMode, totalAmount });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
