const express = require("express");
const router = express.Router();
//const mysql = require("mysql");

const { SignUpController} = require("../controllers/SignupController");
const { ItemController } = require("../controllers/item.contoller");

router.post("/signup",SignUpController);

router.get('/item', ItemController);

module.exports = { customerRouter: router };