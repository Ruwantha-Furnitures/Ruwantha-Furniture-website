module.exports = (app) => {
    const order = require("../controllers/orderForACustomer.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:customer_id", order.findAll);
  
    app.use("/api/customerorder", router);
  };
  