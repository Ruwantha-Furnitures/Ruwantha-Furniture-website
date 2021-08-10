module.exports = (app) => {
  const onlineCustomer = require("../controllers/onlineCustomer.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", onlineCustomer.create);

  //   Retrieve all Tutorials
  router.get("/", onlineCustomer.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", onlineCustomer.findOne);

  //   update the tutorial
  router.put("/:id", onlineCustomer.update);

  // //   delete tutorial
  router.delete("/:id", onlineCustomer.delete);

  app.use("/api/onlineCustomer", router);
};
