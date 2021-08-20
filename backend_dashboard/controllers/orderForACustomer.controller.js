const db = require("../models");
const Order = db.order;

// retrieve the data
exports.findAll = (req, res) => {
    const customerID = req.params.customer_id;    
    Order.findAll({ where: { customer_id: customerID, is_deleted: 0 }, include: ["customer"] })
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