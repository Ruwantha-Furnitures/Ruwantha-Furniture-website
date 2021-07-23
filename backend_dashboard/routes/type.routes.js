module.exports = (app) => {
  const type = require("../controllers/type.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", type.create);

  app.use("/api/type", router);
};
