const db = require("../models");
const Type = db.type;

// retrieve the data
exports.findAll = (req, res) => {
    const categoryID = req.params.category_id ;    
    Type.findAll({ where: { category_id : categoryID, is_deleted: 0 }, include: ["category"]  })
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