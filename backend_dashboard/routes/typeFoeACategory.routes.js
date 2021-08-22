module.exports = (app) => {
    const type = require("../controllers/typeForACategory.controller");
  
    var router = require("express").Router();
  
    //Retrieve all product
    router.get("/:category_id", type.findAll);
  
    app.use("/api/typeforcategory", router);
  };
  