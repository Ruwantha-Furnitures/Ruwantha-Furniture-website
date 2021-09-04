const db = require("../models");
const SellProduct = db.sellProduct;
const validate = require("../validation/sellProduct.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Order
  const sellProduct = {
    product_id: req.body.product_id,
    price: req.body.price,
    quantity: req.body.quantity,
    discount: req.body.discount,
    order_id: req.body.order_id,
  };

  console.log("in the sell product controller");

  //   Save order in the database
  SellProduct.create(sellProduct)
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
  SellProduct.findAll({
    where: { is_deleted: 0 },
    include: ["product", "order"],
  })
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
  SellProduct.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["product", "order"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Sell Product with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  SellProduct.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sell Product was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Sell Product with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Sell Product with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  SellProduct.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sell Product was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Sell Product with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Sell Product with id = " + id,
      });
    });
};

exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  SellProduct.destroy({
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Sell Product was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Sell Product with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Sell Product with id = " + id,
      });
    });
};
