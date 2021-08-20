const db = require("../models");
const SellProduct = db.sellProduct;

// retrieve the data
exports.findAll = (req, res) => {
    const orderID = req.params.order_id;   

    SellProduct.findAll({ where: { order_id: orderID, is_deleted: 0 }, include: ["product", "order"]})
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