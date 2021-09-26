const db = require("../models");
const DeliveryCharges = db.deliveryCharges;
const validate = require("../validation/deliveryCharge.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Order
  const deliveryCharges = {
    area: req.body.area,
    amount: req.body.amount,
  };

  //   Save order in the database
  DeliveryCharges.create(deliveryCharges)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating the DeliveryCharges",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  DeliveryCharges.findAll({ order: [["area", "ASC"]] })
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

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  DeliveryCharges.findOne({
    where: { id: id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving DeliveryCharges with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  DeliveryCharges.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "DeliveryCharges was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update DeliveryCharges with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating DeliveryCharges with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  DeliveryCharges.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "DeliveryCharges was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete DeliveryCharges with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting DeliveryCharges with id = " + id,
      });
    });
};
