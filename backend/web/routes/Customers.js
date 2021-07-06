const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { SignUpController} = require("../controllers/SignupController");

const { ItemController} = require("../controllers/ItemController");

router.post("/signup",SignUpController);

router.post("/items",ItemController);

module.exports = { customerRouter: router };