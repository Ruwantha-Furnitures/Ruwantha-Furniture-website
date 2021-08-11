module.exports = (app) => {
    const account = require("../controllers/login.controller");
  
    var router = require("express").Router();
    
    //   Retrieve 
    router.get("/:email", account.findOne);
  
    app.use("/api/login", router);
  };
  