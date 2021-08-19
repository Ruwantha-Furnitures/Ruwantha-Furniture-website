const db = require("../models");
const Cart = db.cart;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const cart = {
    customer_id: req.body.customer_id,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  };

  //   Save customer in the database
  await Cart.create(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Cart",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Cart.findAll({ where: { is_deleted: 0 }, include: ["customer", "product"] })
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
  Cart.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["customer", "product"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cart with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Cart.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Cart with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Cart with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Cart.update(
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
          message: "Cart was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Cart with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Cart with id = " + id,
      });
    });
};
