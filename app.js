const express = require('express');
const morgan = require('morgan');
const app = express();
const ProductRotuer = require('./routes/Product');
const ProductModel = require('./model/Product');
// Global Middleware
app.use(morgan('dev'));
app.use(express.json());

// Custom Middleware
app.use('/api/product', ProductRotuer);

module.exports = app;
