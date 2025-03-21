require("dotenv").config(); // Load environment variables at the top
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/categories", require("./routes/categoryRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
