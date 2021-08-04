const express = require("express");
const router = express.Router();

const { getNoOfOrdersController } = require("../controllers/PurchaseOrders/getNoOfOrdersController");

router.get("/getnofpurchaseorders/", getNoOfOrdersController);

module.exports = { purchaseordersRouter: router };
