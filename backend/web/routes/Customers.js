const express = require("express");
const router = express.Router();
//const mysql = require("mysql");

const { SignUpController} = require("../controllers/SignupController");
const { itemController } = require("../controllers/item.contoller");

router.post("/signup",SignUpController);

router.get('/item', itemController.allItems);

module.exports = { customerRouter: router };