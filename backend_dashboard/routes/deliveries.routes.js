module.exports = (app) => {
  const deliveries = require("../controllers/deliveries.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", deliveries.create);

  //   Retrieve all Tutorials
  router.get("/", deliveries.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", deliveries.findOne);

  //   update the tutorial
  router.put("/:id", deliveries.update);

  // //   delete tutorial
  router.delete("/:id", deliveries.delete);

  app.use("/api/delivery", router);
};
