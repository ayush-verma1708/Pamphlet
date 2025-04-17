require('dotenv').config(); // Load environment variables from the .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const productRoutes = require('./route.js');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 8000;

// CORS middleware - Add this before other middleware
app.use(cors({
  origin: 'http://localhost:3000', // Your React app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Middleware to parse JSON
app.use(bodyParser.json());

// MongoDB connection using the URI from .env file
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use product routes
app.use('/products', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});