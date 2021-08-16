module.exports = (app) => {
    const cart = require("../controllers/cartForACustomer.controller");
  
    var router = require("express").Router();
  
    // app.get('/users/:userId/books/:bookId', function (req, res) {
    //   res.send(req.params)
    // })

    //Retrieve all product
    router.get("/customer_id/:customer_id", cart.findAll);

    //   Retrieve a single Tutorial with id
    router.get('/customer_id/:customer_id/product_id/:product_id', cart.findOne);

    //   delete tutorial
    router.delete("/id/:cartID", cart.delete);
  
    app.use("/api/customerCart", router);
  };
  