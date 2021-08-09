module.exports = (app) => {
  const product = require("../controllers/product.controller");

  var router = require("express").Router();

  //   Create a new type
  router.post("/", product.upload);

  //  delete a upload
  // router.delete("/:path", product.deleteUpload);

  app.use("/api/image", router);
};
