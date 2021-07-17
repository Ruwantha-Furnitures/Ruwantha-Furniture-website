const express = require("express");
const router = express.Router();

const { ItemsController } = require("../controllers/item.contoller");
const { GetItemController } = require("../controllers/getItemController");

router.get("/", ItemsController);
router.put("/viewProduct/:productID", GetItemController);

module.exports = { productRouter: router };
