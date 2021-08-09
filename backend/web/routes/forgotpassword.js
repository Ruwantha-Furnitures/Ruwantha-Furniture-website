const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
    ForgotPasswordController,
} = require("../controllers/forgetpassword/forgotPassword.js");


router.post("/passwordRecovery",ForgotPasswordController);

module.exports = { ForgotPasswordRouter: router };


