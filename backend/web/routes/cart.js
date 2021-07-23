const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
    AddCartController,
} = require("../controllers/cart/addCartController");

router.post("/addcart",AddCartController);

module.exports = { cartRouter: router };
