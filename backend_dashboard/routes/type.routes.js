module.exports = (app) => {
  const type = require("../controllers/type.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", type.create);

  //   Retrieve all types
  router.get("/", type.findAll);

  //   get single type
  router.get("/:id", type.findOne);

  //   update the type
  router.put("/:id", type.update);

  //   delete type
  router.delete("/:id", type.delete);

  app.use("/api/type", router);
};
