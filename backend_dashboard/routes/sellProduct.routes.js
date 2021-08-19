module.exports = (app) => {
  const sellProduct = require("../controllers/sellProduct.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", sellProduct.create);

  //   Retrieve all types
  router.get("/", sellProduct.findAll);

  // //   get single type
  router.get("/:id", sellProduct.findOne);

  // //   update the type
  router.put("/:id", sellProduct.update);

  // //   delete type
  router.delete("/:id", sellProduct.delete);

  app.use("/api/sellProduct", router);
};
