module.exports = (app) => {
  const payment = require("../controllers/payment.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", payment.create);

  //   Retrieve all Tutorials
  router.get("/", payment.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", payment.findOne);

  //   update the tutorial
  router.put("/:id", payment.update);

  //   delete tutorial
  router.delete("/:id", payment.delete);

  app.use("/api/payment", router);
};
