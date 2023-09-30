const express = require('express');
const router = express.Router();
const controller = require('../controller/Product');
router.route('/').get(controller.getAllProduct);

module.exports = router;
