const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { LoginController } = require("../controllers/customer/login.controller");

const {
  SignUpController,
} = require("../controllers/customer/SignUpController");

const {
  ViewProfileController,
} = require("../controllers/customer/ViewProfileController");

const {
  UpdateProfileController,
} = require("../controllers/customer/UpdateProfileController");

const {
  DeleteProfileController,
} = require("../controllers/customer/DeleteProfile");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/viewprofile/:accID", ViewProfileController);
router.put("/updateprofile/:accID", UpdateProfileController);
router.delete("/delete/:accID",DeleteProfileController);

module.exports = { customerRouter: router };
