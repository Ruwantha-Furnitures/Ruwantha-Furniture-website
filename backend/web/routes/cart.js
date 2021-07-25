const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
    AddCartController,
} = require("../controllers/cart/addCartController");

const {
    viewCartController,
} = require("../controllers/cart/viewCartController");

router.post("/addcart",AddCartController);
router.get("/viewcart/:accID",viewCartController)

module.exports = { cartRouter: router };
