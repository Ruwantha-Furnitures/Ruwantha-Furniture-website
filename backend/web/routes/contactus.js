const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  messageController,
} = require("../controllers/messageController");

router.post("/contact",messageController);

module.exports = { contactusRouter: router };
