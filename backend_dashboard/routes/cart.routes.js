module.exports = (app) => {
  const cart = require("../controllers/cart.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", cart.create);

  //   Retrieve all Tutorials
  router.get("/", cart.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", cart.findOne);

  //   update the tutorial
  router.put("/:id", cart.update);

  //   delete tutorial
  router.delete("/:id", cart.delete);

  app.use("/api/cart", router);
};
