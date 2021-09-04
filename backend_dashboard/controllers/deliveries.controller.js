const db = require("../models");
const Deliveries = db.deliveries;
const validate = require("../validation/deliveries.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Product
  const deliveries = {
    order_id: req.body.order_id,
    delivery_driver_id: req.body.delivery_driver_id,
  };

  //   Save deliveries in the database
  Deliveries.create(deliveries)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Deliveries",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Deliveries.findAll({
    where: { is_deleted: 0 },
    include: ["order", "deliveryDriver"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving Deliveries Details",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  Deliveries.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["order", "deliveryDriver"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Deliveries Details with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Deliveries.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Deliveries Details was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update Deliveries Details with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Deliveries Details with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Deliveries.update(
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
          message: "Assign Order Details was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete Assign Order Details with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Product with id = " + id,
      });
    });
};
