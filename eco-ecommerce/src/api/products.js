const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Import Product model

// GET Products by Category
router.get("/", async (req, res) => {
  try {
    const category = req.query.category; // Get category from query params

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Fetch products based on category
    const products = await Product.find({ category: category });

    // If no products found, return empty array
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
