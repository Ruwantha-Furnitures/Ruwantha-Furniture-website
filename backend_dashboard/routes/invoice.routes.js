module.exports = (app) => {
  const invoice = require("../controllers/invoice.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", invoice.create);

  //   Retrieve all types
  router.get("/", invoice.findAll);

  //   get single type
  router.get("/:id", invoice.findOne);

  //   update the type
  router.put("/:id", invoice.update);

  //   delete type
  router.delete("/:id", invoice.delete);

  app.use("/api/invoice", router);
};
