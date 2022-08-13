const express = require('express');
const router = express.Router();

const {getProducts} = require('../controllers/productControllers')
router.get("/items", getProducts);

module.exports = router;