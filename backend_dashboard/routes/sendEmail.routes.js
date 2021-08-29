module.exports = (app) => {
    const sendEmail = require("../controllers/shippingDetails.controller");
  
    var router = require("express").Router();
    
    // //   get single type
    router.get("/:email", sendEmail.sendEmail);
  
  
    app.use("/api/sendEmail", router);
  };
  