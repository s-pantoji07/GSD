const mongoose = require("mongoose");
const Product = require("../src/models/Product"); // Update with actual path
const Category = require("../src/models/Category"); // Update with actual path

// MongoDB connection string
const mongoURI = "mongodb+srv://sarveshmpantoji1354:spantoji07@cluster0.979t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  // Fruits and Vegetables
  { name: "Alphonso Mango", image: "https://assets.upstox.com/products/alphonso_mango.jpg", price_before_discount: 500, price_after_discount: 450, discount: 10, review: 4.8, category: "Fruits and Vegetables" },
  { name: "Organic Aloo (Potato)", image: "https://assets.upstox.com/products/organic_aloo.jpg", price_before_discount: 40, price_after_discount: 35, discount: 12, review: 4.5, category: "Fruits and Vegetables" },

  // Dairy and Eggs
  { name: "Amul Gold Milk", image: "https://assets.upstox.com/products/amul_gold_milk.jpg", price_before_discount: 80, price_after_discount: 75, discount: 6, review: 4.6, category: "Dairy and Eggs" },
  { name: "Farm Fresh Eggs (12 pcs)", image: "https://assets.upstox.com/products/farm_fresh_eggs.jpg", price_before_discount: 150, price_after_discount: 130, discount: 13, review: 4.7, category: "Dairy and Eggs" },

  // Meat and Poultry
  { name: "Country Chicken (Desi Murg)", image: "https://assets.upstox.com/products/country_chicken.jpg", price_before_discount: 600, price_after_discount: 550, discount: 8, review: 4.4, category: "Meat and Poultry" },
  { name: "Fresh Mutton (Goat Meat)", image: "https://assets.upstox.com/products/fresh_mutton.jpg", price_before_discount: 900, price_after_discount: 850, discount: 5, review: 4.8, category: "Meat and Poultry" },

  // Seafood
  { name: "Fresh Rohu Fish", image: "https://assets.upstox.com/products/rohu_fish.jpg", price_before_discount: 350, price_after_discount: 320, discount: 9, review: 4.6, category: "Seafood" },
  { name: "Tiger Prawns (1 kg)", image: "https://assets.upstox.com/products/tiger_prawns.jpg", price_before_discount: 1200, price_after_discount: 1100, discount: 8, review: 4.7, category: "Seafood" },

  // Bakery and Bread
  { name: "Pav Bhaji Buns", image: "https://assets.upstox.com/products/pav_bhaji_buns.jpg", price_before_discount: 50, price_after_discount: 45, discount: 10, review: 4.5, category: "Bakery and Bread" },
  { name: "Multigrain Brown Bread", image: "https://assets.upstox.com/products/multigrain_bread.jpg", price_before_discount: 80, price_after_discount: 75, discount: 6, review: 4.6, category: "Bakery and Bread" },

  // Canned Goods
  { name: "Tata Sampann Chole Masala", image: "https://assets.upstox.com/products/tata_chole_masala.jpg", price_before_discount: 120, price_after_discount: 110, discount: 8, review: 4.7, category: "Canned Goods" },
  { name: "Haldiram's Ready-to-Eat Rajma", image: "https://assets.upstox.com/products/haldiram_rajma.jpg", price_before_discount: 150, price_after_discount: 135, discount: 10, review: 4.6, category: "Canned Goods" },

  // Frozen Foods
  { name: "McCain French Fries", image: "https://assets.upstox.com/products/mccain_french_fries.jpg", price_before_discount: 180, price_after_discount: 160, discount: 11, review: 4.5, category: "Frozen Foods" },
  { name: "Amul Malai Kulfi", image: "https://assets.upstox.com/products/amul_kulfi.jpg", price_before_discount: 100, price_after_discount: 90, discount: 10, review: 4.8, category: "Frozen Foods" },

  // Pasta and Rice
  { name: "India Gate Basmati Rice (5kg)", image: "https://assets.upstox.com/products/india_gate_rice.jpg", price_before_discount: 600, price_after_discount: 550, discount: 8, review: 4.9, category: "Pasta and Rice" },
  { name: "Maggi Masala Noodles", image: "https://assets.upstox.com/products/maggi_noodles.jpg", price_before_discount: 30, price_after_discount: 28, discount: 6, review: 4.7, category: "Pasta and Rice" },

  // Breakfast Foods
  { name: "Kellogg's Corn Flakes", image: "https://assets.upstox.com/products/kelloggs_cornflakes.jpg", price_before_discount: 350, price_after_discount: 320, discount: 9, review: 4.6, category: "Breakfast Foods" },
  { name: "Saffola Oats", image: "https://assets.upstox.com/products/saffola_oats.jpg", price_before_discount: 250, price_after_discount: 230, discount: 8, review: 4.7, category: "Breakfast Foods" },
];

// Function to find category ID and insert products
const seedDatabase = async () => {
  try {
    const categoriesMap = {};
    const categories = await Category.find({});
    
    categories.forEach(category => {
      categoriesMap[category.name] = category._id;
    });

    const formattedProducts = products.map(product => ({
      ...product,
      category: categoriesMap[product.category],
    }));

    await Product.insertMany(formattedProducts);
    console.log("Products added successfully!");
  } catch (error) {
    console.error("Error inserting products:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
