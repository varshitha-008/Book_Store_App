const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:orderId', orderController.getOrderById);

module.exports = router;
