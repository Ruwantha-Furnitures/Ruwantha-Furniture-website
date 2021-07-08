const express = require("express");
const router = express.Router();

const { ItemsController } = require("../controllers/item.contoller");

router.get("/", ItemsController);

module.exports = { productRouter: router };
