const express = require("express");
const { placeOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware"); // Ensure user is authenticated

const router = express.Router();

router.post("/", protect, placeOrder); // Fix the endpoint

module.exports = router;
