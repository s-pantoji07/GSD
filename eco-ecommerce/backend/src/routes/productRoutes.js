const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Assuming Mongoose model

// Get product by ID
router.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;