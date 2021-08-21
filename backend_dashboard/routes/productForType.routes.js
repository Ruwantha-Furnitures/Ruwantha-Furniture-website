module.exports = (app) => {
    const product = require("../controllers/productForType.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:type_id", product.findAll);
  
    app.use("/api/productfortype", router);
  };
  