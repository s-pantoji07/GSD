const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { address, paymentMode, totalAmount, deliveryCharge } = req.body;
    const userId = req.user._id; // Extract from middleware

    if (!userId || !address || !paymentMode || !totalAmount || deliveryCharge === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({ userId, address, paymentMode, totalAmount, deliveryCharge });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
