const db = require("../models");
const Type = db.type;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Type
  const type = {
    name: req.body.name,
    categoryId: req.body.categoryId,
  };

  //   Save Type in the database
  await Type.create(type)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Type",
      });
    });
};

exports.findAll = (req, res) => {
  Type.findAll({ where: { is_deleted: 0 } })
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

  Type.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Type with id = " + id + " " + err,
      });
    });
};
