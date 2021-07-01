const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { getCustomersController} = require("../controllers/CustomerController");

router.post("/signup",getCustomersController);

module.exports = { customerRouter: router };