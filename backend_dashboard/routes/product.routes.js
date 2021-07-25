module.exports = (app) => {
  const product = require("../controllers/product.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", product.create);

  // //   Retrieve all types
  // router.get("/", type.findAll);

  // //   get single type
  // router.get("/:id", type.findOne);

  // //   update the type
  // router.put("/:id", type.update);

  // //   delete type
  // router.delete("/:id", type.delete);

  app.use("/api/product", router);
};
