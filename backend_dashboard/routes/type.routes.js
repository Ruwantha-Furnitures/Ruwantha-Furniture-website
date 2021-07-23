module.exports = (app) => {
  const type = require("../controllers/type.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", type.create);

  //   Retrieve all Tutorials
  router.get("/", type.findAll);

  //   get single type
  router.get("/:id", type.findOne);

  app.use("/api/type", router);
};
