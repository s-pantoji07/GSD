const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Ensure you have a User model
require("dotenv").config();

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token:", decoded); // Debugging line

      req.user = await User.findById(req.body.userId).select("-password");
      // Fetch user details

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      return next(); // Proceed to next middleware
    } catch (error) {
      console.error("JWT Verification Error:", error); // Log the error
      return res.status(401).json({ message: "Token invalid or expired" });
    }
  }

  return res
    .status(401)
    .json({ message: "No token provided, authorization denied" });
};
