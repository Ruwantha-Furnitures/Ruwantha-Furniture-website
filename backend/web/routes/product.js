const express = require("express");
const router = express.Router();

const { ItemsController } = require("../controllers/product/item.contoller");
const { getItemController } = require("../controllers/product/getItemController");

router.get("/", ItemsController);
router.get("/viewProduct/:itemID", getItemController);

module.exports = { productRouter: router };
