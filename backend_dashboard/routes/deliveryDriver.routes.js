module.exports = (app) => {
  const deliveryDriver = require("../controllers/deliveryDriver.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", deliveryDriver.create);

  //   Retrieve all types
  router.get("/", deliveryDriver.findAll);

  //   get single type
  router.get("/:id", deliveryDriver.findOne);

  //   update the type
  router.put("/:id", deliveryDriver.update);

  //   delete type
  router.delete("/:id", deliveryDriver.delete);

  app.use("/api/deliveryDriver", router);
};
