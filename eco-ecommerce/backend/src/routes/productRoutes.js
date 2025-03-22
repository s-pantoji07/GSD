const express = require("express");
const router = express.Router();
const { getProductsByCategory } = require("../controllers/productController");

router.get("/", getProductsByCategory); // Fetch products by category

module.exports = router;
