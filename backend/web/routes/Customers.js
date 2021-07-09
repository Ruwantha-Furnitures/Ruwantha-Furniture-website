const express = require("express");
const router = express.Router();
//const mysql = require("mysql");

const { SignUpController} = require("../controllers/SignupController");

router.post("/signup", SignUpController);

module.exports = { customerRouter: router };