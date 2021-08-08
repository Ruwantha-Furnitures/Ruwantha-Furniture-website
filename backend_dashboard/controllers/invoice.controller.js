const db = require("../models");
const Invoice = db.invoice;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Invoice
  const invoice = {
    customer_id: req.body.customer_id,
  };

  //   Save invoice in the database
  await Invoice.create(invoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Invoice",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Invoice.findAll({ where: { is_deleted: 0 }, include: ["customer"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Invoice",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  Invoice.findOne({ where: { id: id, is_deleted: 0 }, include: ["customer"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Invoice with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Invoice.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Invoice was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Invoice with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Invoice with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Invoice.update(
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
          message: "Invoice was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Invoice with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Invoice with id = " + id,
      });
    });
};
