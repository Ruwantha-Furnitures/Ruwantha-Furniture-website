module.exports = (app) => {
    const productReview = require("../controllers/productReview.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:productID", productReview.findAll);
  
    app.use("/api/productReviewForAProduct", router);
  };
  