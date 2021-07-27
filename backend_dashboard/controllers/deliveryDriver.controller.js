const db = require("../models");
const DeliveryDriver = db.deliveryDriver;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a DeliverDriver
  const deliverDriver = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    contact_number: req.body.contact_number,
    payment: req.body.payment,
    area: req.body.area,
  };

  //   Save deliverDriver in the database
  await DeliveryDriver.create(deliverDriver)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the DeliverDriver",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  DeliveryDriver.findAll({ where: { is_deleted: 0 } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving Delivery Drivers",
      });
    });
};
