const express = require("express");
const router = express.Router();

const { ItemsController } = require("../controllers/item.contoller");
const { getItemController } = require("../controllers/getItemController");

router.get("/", ItemsController);
router.get("/viewProduct/:itemID", getItemController);

module.exports = { productRouter: router };
