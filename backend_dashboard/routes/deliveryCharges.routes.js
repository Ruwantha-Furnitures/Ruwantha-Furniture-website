module.exports = (app) => {
  const deliveryCharges = require("../controllers/deliveryCharges.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", deliveryCharges.create);

  //   Retrieve all Tutorials
  router.get("/", deliveryCharges.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", deliveryCharges.findOne);

  //   update the tutorial
  router.put("/:id", deliveryCharges.update);

  //   delete tutorial
  router.delete("/:id", deliveryCharges.delete);

  app.use("/api/deliveryCharge", router);
};
