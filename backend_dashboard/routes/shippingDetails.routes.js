module.exports = (app) => {
  const shippingDetail = require("../controllers/shippingDetails.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", shippingDetail.create);

  //   Retrieve all types
  router.get("/", shippingDetail.findAll);

  // //   get single type
  router.get("/:id", shippingDetail.findOne);

  // //   update the type
  router.put("/:id", shippingDetail.update);

  // //   delete type
  router.delete("/:id", shippingDetail.delete);

  app.use("/api/shippingDetail", router);
};
