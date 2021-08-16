module.exports = (app) => {
    const account = require("../controllers/signup.controller");
  
    var router = require("express").Router();
    
    //   Retrieve 
    router.get("/:email", account.findOne);
  
    app.use("/api/signup", router);
};
  