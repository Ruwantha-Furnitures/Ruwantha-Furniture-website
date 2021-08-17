const db = require("../models");
const DeliveryCharges = db.deliveryCharges;

// retrieve the data
exports.findOne = (req, res) => {
    const area = req.params.area;   

    DeliveryCharges.findOne({ where: { area: area }})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occured while retrieving DeliveryChargess",
        });
      });
  };
  