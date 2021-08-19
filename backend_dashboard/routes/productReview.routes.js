module.exports = (app) => {
  const productReview = require("../controllers/productReview.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", productReview.create);

  //   Retrieve all types
  router.get("/", productReview.findAll);

  // //   get single type
  router.get("/:id", productReview.findOne);

  // //   update the type
  router.put("/:id", productReview.update);

  // //   delete type
  router.delete("/:id", productReview.delete);

  app.use("/api/productReview", router);
};
