const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { getDeliveryChargeController } = require("../controllers/payment/getDeliveryChargeController");
const { GetSelectedDeliveryChargeController } = require("../controllers/payment/getSelectedDeliveryChargeController");
const { AddPaymentController } = require("../controllers/payment/addPaymentController");
const { AddPurchaseOrderController } = require("../controllers/payment/addPurchaseOrder");

router.get("/deliverycharge", getDeliveryChargeController);
router.get("/deliverychargefordistrict/:area", GetSelectedDeliveryChargeController);
router.post("/addpayment", AddPaymentController);
router.post("/addpurchaseorder", AddPurchaseOrderController);

module.exports = { PaymentRouter: router };
