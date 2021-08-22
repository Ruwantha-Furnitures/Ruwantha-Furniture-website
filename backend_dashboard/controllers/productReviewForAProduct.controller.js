const db = require("../models");
const ProductReview = db.productReview;

// retrieve the data
exports.findAll = (req, res) => {
    const productID = req.params.product_id ;    
    ProductReview.findAll({ where: { 	product_id  : productID, is_deleted: 0 }, include: ["product"],  })
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