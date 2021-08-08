const db = require("../models");
const Order = db.order;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.price) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Order
  const order = {
    product_id: req.body.product_id,
    price: req.body.price,
    quantity: req.body.quantity,
    discount: req.body.discount,
    invoice_id: req.body.invoice_id,
  };

  //   Save order in the database
  await Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Order",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Order.findAll({ where: { is_deleted: 0 }, include: ["product", "invoice"] })
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
  Order.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["product", "invoice"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Order with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Order with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Order.update(
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
          message: "Order was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Order with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Order with id = " + id,
      });
    });
};
