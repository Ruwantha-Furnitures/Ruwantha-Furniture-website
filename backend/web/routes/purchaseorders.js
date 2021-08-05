const express = require("express");
const router = express.Router();

const { getNoOfOrdersController } = require("../controllers/PurchaseOrders/getNoOfOrdersController");

router.post("/getpurchaseorders/", getNoOfOrdersController);

module.exports = { purchaseordersRouter: router };
