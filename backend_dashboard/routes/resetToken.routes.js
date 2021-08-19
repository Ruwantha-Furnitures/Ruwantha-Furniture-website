module.exports = (app) => {
  const resetToken = require("../controllers/resetToken.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", resetToken.create);

  //   Retrieve all types
  router.get("/", resetToken.findAll);

  // //   get single type
  router.get("/:id", resetToken.findOne);

  // //   update the type
  router.put("/:id", resetToken.update);

  // //   delete type
  router.delete("/:id", resetToken.delete);

  app.use("/api/resetToken", router);
};
