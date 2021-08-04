module.exports = (app) => {
  const product = require("../controllers/product.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", product.upload);

  app.use("/api/image", router);
};
