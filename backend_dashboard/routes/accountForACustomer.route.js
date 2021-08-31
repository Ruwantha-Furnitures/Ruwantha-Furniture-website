module.exports = (app) => {
    const account = require("../controllers/accountForACustomer.controller");
  
    var router = require("express").Router();
  
    //   update the tutorial
    router.put("/:email", account.update);

    app.use("/api/accountForCustomer", router);
  };
  