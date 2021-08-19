const db = require("../models");
const Category = db.category;

exports.create = (req, res) => {
  // validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Category
  const category = {
    name: req.body.name,
  };

  //   Save Category in the database
  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Category",
      });
    });
};

// retrieve the data

exports.findAll = (req, res) => {
  Category.findAll({ where: { is_deleted: 0 } })
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
  Category.findOne({ where: { id: id, is_deleted: 0 } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Category with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Category with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Category.update(
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
          message: "Category was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Category with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error delete Category with id = " + id,
      });
    });
};
