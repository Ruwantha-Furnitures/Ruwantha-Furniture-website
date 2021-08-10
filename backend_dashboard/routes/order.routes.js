module.exports = (app) => {
  const order = require("../controllers/order.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", order.create);

  //   Retrieve all types
  router.get("/", order.findAll);

  //   get single type
  router.get("/:id", order.findOne);

  //   update the type
  router.put("/:id", order.update);

  //   delete type
  router.delete("/:id", order.delete);

  app.use("/api/order", router);
};
