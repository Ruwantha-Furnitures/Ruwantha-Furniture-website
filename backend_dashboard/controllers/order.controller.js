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
    customer_id: req.body.customer_id,
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
