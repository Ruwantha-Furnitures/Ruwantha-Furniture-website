module.exports = (app) => {
  const category = require("../controllers/category.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", category.create);

  //   Retrieve all Tutorials
  router.get("/", category.findAll);

  //   Retrieve a single Tutorial with id
  router.get("/:id", category.findOne);

  //   update the tutorial
  router.put("/:id", category.update);

  //   delete tutorial
  router.delete("/:id", category.delete);

  app.use("/api/category", router);
};
