const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensure each product has a unique ID
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String, // Store price as a string (you can change it to Number if you prefer)
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs or paths
    required: true,
  },
  details: {
    type: [String], // Array of details about the product
    required: true,
  },
  sizes: {
    type: [String], // Array of available sizes
    required: true,
  },
}, {
  timestamps: true, // Optional: Adds createdAt and updatedAt fields automatically
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
