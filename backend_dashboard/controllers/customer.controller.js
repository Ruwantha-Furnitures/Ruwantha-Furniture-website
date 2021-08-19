const db = require("../models");
const Customer = db.customer;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.first_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const customer = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    contact_number: req.body.contact_number,
  };

  //   Save customer in the database
  await Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Product",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Customer.findAll({ where: { is_deleted: 0 } })
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

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  Customer.findOne({ where: { id: id, is_deleted: 0 } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Customer with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Customer.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Customer with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.update(
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
          message: "Customer was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Customer with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Customer with id = " + id,
      });
    });
};
