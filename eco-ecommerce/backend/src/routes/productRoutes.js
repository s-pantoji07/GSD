const express = require("express");
const Product = require("../models/Product"); // Assuming the Product model is in the models folder

const router = express.Router();

// Get products with optional category or search query
router.get("/", async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query; // Get query params
    const skip = (page - 1) * limit;

    let query = {};

    // If category is provided, filter by category
    if (category) query.category = category;

    // If search term is provided, perform a case-insensitive search for product name
    if (search) query.name = { $regex: search, $options: "i" }; // i for case-insensitive

    // Fetch products with pagination
    const products = await Product.find(query)
      .skip(skip)
      .limit(parseInt(limit));

    // Return the products
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Fetch product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
