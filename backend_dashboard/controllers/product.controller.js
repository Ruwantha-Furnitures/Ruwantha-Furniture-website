const db = require("../models");
const Product = db.product;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const product = {
    name: req.body.name,
    type_id: req.body.type_id,
    price: req.body.price,
    description: req.body.description,
    color: req.body.color,
    width: req.body.width,
    height: req.body.height,
    discount: req.body.discount,
    img_location: req.body.img_location,
  };

  //   Save Product in the database
  await Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Product",
      });
    });
};
