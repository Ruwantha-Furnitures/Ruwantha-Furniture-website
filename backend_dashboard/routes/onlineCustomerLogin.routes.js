module.exports = (app) => {
    const onlineCustomerLogin = require("../controllers/onlineCustomerLogin.controler");
  
    var router = require("express").Router();
  
    //   Retrieve a single Tutorial with id
    router.get("/:accountId", onlineCustomerLogin.findOne);
  
    app.use("/api/onlineCustomerLogin", router);
  };
  