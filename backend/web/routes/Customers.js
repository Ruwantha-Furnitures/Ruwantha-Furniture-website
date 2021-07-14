const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const { LoginController } = require("../controllers/login.controller");

const {
  SignUpController,
} = require("../controllers/SignUpController");

const {
  ViewProfileController,
} = require("../controllers/ViewProfileController");

const {
  UpdateProfileController,
} = require("../controllers/UpdateProfileController");

const {
  messageController,
} = require("../controllers/messageController");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/viewprofile/:accID", ViewProfileController);
router.put("/updateprofile/:accID", UpdateProfileController);
router.post("/contact",messageController);

module.exports = { customerRouter: router };
