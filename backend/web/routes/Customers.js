const express = require("express");
const router = express.Router();
//const mysql = require("mysql");

const { SignUpController } = require("../controllers/SignupController");
const { LoginController } = require("../controllers/login.controller");
const {
  ViewProfileController,
} = require("../controllers/ViewProfileController");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/viewprofile/:accID", ViewProfileController);

module.exports = { customerRouter: router };
