const db = require("../models");
const Product = db.product;

// retrieve the data
exports.findAll = (req, res) => {
    const typeID = req.params.type_id ;    
    Product.findAll({ where: { 	type_id  : typeID, is_deleted: 0 }, include: ["type"],  })
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