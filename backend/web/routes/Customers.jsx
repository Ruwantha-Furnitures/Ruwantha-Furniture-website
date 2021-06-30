const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  SignUpController,
} = require("../controllers/CustomerController");

router.post("/signup", SignUpController);

module.exports = { customerRouter: router };