const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { LoginController } = require("../controllers/customer/LoginController");

const {
  SignUpController,
} = require("../controllers/customer/SignupController");

const {
  ViewProfileController,
} = require("../controllers/customer/ViewProfileController");

const {
  UpdateProfileController,
} = require("../controllers/customer/UpdateProfileController");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/viewprofile/:accID", ViewProfileController);
router.put("/viewprofile/:accID", UpdateProfileController);

module.exports = { customerRouter: router };
