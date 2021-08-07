const express = require("express");
const router = express.Router();

const { getAllCategoryController } = require("../controllers/category/getAllCategoryController");

router.get("/", getAllCategoryController);

module.exports = { categoryRouter: router };
