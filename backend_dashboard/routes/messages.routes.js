module.exports = (app) => {
  const messages = require("../controllers/messages.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", messages.create);

  //   Retrieve all Tutorials
  router.get("/", messages.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", messages.findOne);

  //   update the tutorial
  router.put("/:id", messages.update);

  //   delete tutorial
  router.delete("/:id", messages.delete);

  app.use("/api/message", router);
};
