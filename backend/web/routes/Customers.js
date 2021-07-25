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

// const {
//   messageController,
// } = require("../controllers/contactus/messageController");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/viewprofile/:accID", ViewProfileController);
router.put("/updateprofile/:accID", UpdateProfileController);
// router.post("/contact",messageController);

module.exports = { customerRouter: router };
