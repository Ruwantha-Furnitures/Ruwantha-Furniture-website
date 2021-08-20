module.exports = (app) => {
    const sellProduct = require("../controllers/sellProductForACustomer.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:order_id", sellProduct.findAll);
  
    app.use("/api/customersellProduct", router);
  };
  