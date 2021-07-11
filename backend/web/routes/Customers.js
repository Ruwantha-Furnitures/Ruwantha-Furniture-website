const express = require("express");
const router = express.Router();
//const mysql = require("mysql");

const { SignUpController} = require("../controllers/SignupController");
const { LoginController } = require("../controllers/login.controller");

router.post("/signup", SignUpController);
router.post("/login", LoginController);

module.exports = { customerRouter: router };