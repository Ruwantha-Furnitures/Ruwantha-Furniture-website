const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { getDeliveryChargeController } = require("../controllers/payment/getDeliveryChargeController");
const { GetSelectedDeliveryChargeController } = require("../controllers/payment/getSelectedDeliveryChargeController");


router.get("/deliverycharge", getDeliveryChargeController);
router.get("/deliverychargefordistrict/:area", GetSelectedDeliveryChargeController);


module.exports = { PaymentRouter: router };
