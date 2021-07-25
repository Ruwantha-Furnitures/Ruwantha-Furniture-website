module.exports = (app) => {
  const customer = require("../controllers/customer.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", customer.create);

  //   Retrieve all types
  router.get("/", customer.findAll);

  //   get single type
  router.get("/:id", customer.findOne);

  // //   update the type
  router.put("/:id", customer.update);

  // //   delete type
  router.delete("/:id", customer.delete);

  app.use("/api/customer", router);
};
