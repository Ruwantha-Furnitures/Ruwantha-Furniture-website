const db = require("../models");
const Cart = db.cart;

// retreive single object
exports.findOne = (req, res) => {
    const customerID = req.params.customer_id;
    const productID = req.params.product_id;

    console.log(req.params)
    
    Cart.findOne({
        where: { customer_id: customerID, product_id:productID, is_deleted: 0 },
        include: ["customer", "product"],
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Cart with id = " + customerID,
        });
    });
};
  
// retrieve the data
exports.findAll = (req, res) => {
    const customerID = req.params.customer_id;    
    Cart.findAll({ where: { customer_id: customerID, is_deleted: 0 }, include: ["customer", "product"] })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving Categories",
        });
    });
};

// delete an object
exports.delete = (req, res) => {
    console.log("In the delete controller in cart for one customer")
    const cartID = req.params.cartID;    
    Cart.destroy({ where: { id: cartID, is_deleted: 0 }, include: ["customer", "product"] })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving Categories",
        });
    });
};
 