module.exports = (app) => {
  const assignOrderDetails = require("../controllers/assignOrderDetails.controller");

  var router = require("express").Router();

  //   Create a new Tutorial
  router.post("/", assignOrderDetails.create);

  //   Retrieve all Tutorials
  // router.get("/", assignOrderDetails.findAll);

  // //   Retrieve a single Tutorial with id
  // router.get("/:id", assignOrderDetails.findOne);

  // //   update the tutorial
  // router.put("/:id", assignOrderDetails.update);

  // //   delete tutorial
  // router.delete("/:id", assignOrderDetails.delete);

  app.use("/api/assignOrderDetail", router);
};
