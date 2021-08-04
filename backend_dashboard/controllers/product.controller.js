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

exports.upload = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  file.mv(`../public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
};

// retrieve the data
exports.findAll = (req, res) => {
  Product.findAll({ where: { is_deleted: 0 }, include: ["type"] })
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
  Product.findOne({ where: { id: id, is_deleted: 0 }, include: ["type"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Product with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Product with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Product with id = " + id,
      });
    });
};
