const express = require('express');
const Product = require('./Product');
const router = express.Router();

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// GET: Fetch a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id }); // Find product by its unique id
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

module.exports = router;
