module.exports = (app) => {
    const deliveryCharges = require("../controllers/deliverychargefordistrict.controller");
  
    var router = require("express").Router();
  
    //   Retrieve all Tutorials
    router.get("/area/:area", deliveryCharges.findOne);
  
  
    app.use("/api/deliverychargefordistrict", router);
  };
  