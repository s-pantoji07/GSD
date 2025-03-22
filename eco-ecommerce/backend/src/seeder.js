require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("./models/Category");
const Product = require("./models/Product");
const { categories } = require("./data/sampledata");
const connectDB = require("./config/db");

// Connect to Database
connectDB();

const seedDatabase = async () => {
  try {
    console.log("Seeding Database...");

    // Clear existing data
    await Category.deleteMany();
    await Product.deleteMany();

    // Insert categories and products
    for (const cat of categories) {
      const createdCategory = await Category.create({
        name: cat.name,
        image: cat.image,
      });

      const productIds = [];

      for (const prod of cat.products) {
        const createdProduct = await Product.create({
          ...prod,
          category: createdCategory._id,
        });
        productIds.push(createdProduct._id);
      }

      createdCategory.products = productIds;
      await createdCategory.save();
    }

    console.log("Database Seeded Successfully! 🎉");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run Seeder
seedDatabase();
