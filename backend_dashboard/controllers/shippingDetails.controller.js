const db = require("../models");
const ShippingDetails = db.shippingDetails;
const validate = require("../validation/shippingDetails.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Product
  const shippingDetails = {
    order_id: req.body.order_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    shipping_address: req.body.shipping_address,
    contact_number: req.body.contact_number,
    charge_id: req.body.charge_id,
  };

  console.log("in the shipping details controller");

  //   Save customer in the database
  ShippingDetails.create(shippingDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating the Shipping Details",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  ShippingDetails.findAll({
    where: { is_deleted: 0 },
    include: ["deliveryCharge", "order"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving Shipping Details",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  ShippingDetails.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["deliveryCharge", "order"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ShippingDetails with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  ShippingDetails.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ShippingDetails was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update ShippingDetails with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ShippingDetails with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  ShippingDetails.update(
    {
      is_deleted: true,
    },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ShippingDetails was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete ShippingDetails with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Customer with id = " + id,
      });
    });
};
