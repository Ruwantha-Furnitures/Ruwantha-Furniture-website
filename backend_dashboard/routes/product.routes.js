module.exports = (app) => {
  const product = require("../controllers/product.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", product.create);

  //   Retrieve all types
  router.get("/", product.findAll);

  //   get single type
  router.get("/:id", product.findOne);

  //   update the type
  router.put("/:id", product.update);

  //   delete type
  router.delete("/:id", product.delete);

  app.use("/api/product", router);
};
