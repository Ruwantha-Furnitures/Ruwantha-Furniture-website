module.exports = (app) => {
  const account = require("../controllers/account.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", account.create);

  //   Retrieve all Tutorials
  router.get("/", account.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", account.findOne);

  //   update the tutorial
  router.put("/:id", account.update);

  //   delete tutorial
  router.delete("/:id", account.delete);

  app.use("/api/account", router);
};
