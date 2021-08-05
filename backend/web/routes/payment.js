const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { getDeliveryChargeController } = require("../controllers/payment/getDeliveryChargeController");
const { GetSelectedDeliveryChargeController } = require("../controllers/payment/getSelectedDeliveryChargeController");
const { AddPaymentController } = require("../controllers/payment/addPaymentController");

router.get("/deliverycharge", getDeliveryChargeController);
router.get("/deliverychargefordistrict/:area", GetSelectedDeliveryChargeController);
router.post("/addpayment", AddPaymentController);

module.exports = { PaymentRouter: router };
