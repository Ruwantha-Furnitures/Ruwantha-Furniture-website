const db = require("../models");
const DeliveryDriver = db.deliveryDriver;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.account_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a DeliverDriver
  const deliverDriver = {
    account_id: req.body.account_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    contact_number: req.body.contact_number,
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
  DeliveryDriver.findAll({ where: { is_deleted: 0 }, include: ["account"] })
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

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  DeliveryDriver.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["account"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Delivery Driver with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  DeliveryDriver.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Delivery Driver was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Delivery Driver with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Delivery Driver with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  DeliveryDriver.update(
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
          message: "Delivery Driver was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Delivery Driver with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Delivery Driver with id = " + id,
      });
    });
};
