const db = require("../models");
const ProductReview = db.productReview;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.product_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const productReview = {
    product_id: req.body.product_id,
    feedback: req.body.feedback,
    rating_points: req.body.rating_points,
  };

  //   Save customer in the database
  await ProductReview.create(productReview)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the ProductReview",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  ProductReview.findAll({ where: { is_deleted: 0 }, include: ["product"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving ProductReview",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  ProductReview.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["product"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ProductReview with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  ProductReview.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ProductReview was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update ProductReview with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProductReview with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  ProductReview.update(
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
          message: "ProductReview was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete ProductReview with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting ProductReview with id = " + id,
      });
    });
};
