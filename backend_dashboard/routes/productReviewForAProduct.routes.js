module.exports = (app) => {
    const productReview = require("../controllers/productReviewForAProduct.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:product_id", productReview.findAll);
  
    app.use("/api/productReviewForAProduct", router);
  };
  