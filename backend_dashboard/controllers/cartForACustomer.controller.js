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
  
 