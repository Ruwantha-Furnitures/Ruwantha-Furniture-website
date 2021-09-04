const db = require("../models");
const Payment = db.payments;
const validate = require("../validation/payment.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Product
  const payment = {
    order_id: req.body.order_id,
    total_amounts: req.body.total_amounts,
  };

  console.log("in the order controller");

  //   Save customer in the database
  Payment.create(payment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Payment",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Payment.findAll({ where: { is_deleted: 0 }, include: ["order"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Payment",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  Payment.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["order"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Payment with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Payment.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Payment was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Payment with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Payment with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Payment.update(
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
          message: "Payment was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Payment with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Payment with id = " + id,
      });
    });
};
