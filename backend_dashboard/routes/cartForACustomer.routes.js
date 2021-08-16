module.exports = (app) => {
    const cart = require("../controllers/cartForACustomer.controller");
  
    var router = require("express").Router();
  
    // app.get('/users/:userId/books/:bookId', function (req, res) {
    //   res.send(req.params)
    // })

    //   Retrieve a single Tutorial with id
    router.get('/customer_id/:customer_id/product_id/:product_id', cart.findOne);
  
    app.use("/api/customerCart", router);
  };
  