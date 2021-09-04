const db = require("../models");
const OnlineCustomer = db.onlineCustomer;
const validate = require("../validation/onlineCustomer.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Order
  const onlineCustomer = {
    customer_id: req.body.customer_id,
    account_id: req.body.account_id,
  };

  //   Save order in the database
  OnlineCustomer.create(onlineCustomer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the OnlineCustomer",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  OnlineCustomer.findAll({
    where: { is_deleted: 0 },
    include: ["customer", "account"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving OnlineCustomers",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  OnlineCustomer.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["customer", "account"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving OnlineCustomer with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  OnlineCustomer.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "OnlineCustomer was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update OnlineCustomer with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating OnlineCustomer with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  OnlineCustomer.update(
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
          message: "OnlineCustomer was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete OnlineCustomer with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Account with id = " + id,
      });
    });
};
