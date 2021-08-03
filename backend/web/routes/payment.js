const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { getDeliveryChargeController } = require("../controllers/payment/getDeliveryChargeController");

router.get("/deliverycharge", getDeliveryChargeController);

module.exports = { PaymentRouter: router };
