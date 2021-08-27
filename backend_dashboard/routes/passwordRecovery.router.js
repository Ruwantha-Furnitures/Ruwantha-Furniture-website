module.exports = (app) => {
    const account = require("../controllers/passwordRecovery.controller");
  
    var router = require("express").Router();
    
    //   Retrieve 
    router.get("/:email", account.findOne);
  
    app.use("/api/passwordRecovery", router);
  };
  