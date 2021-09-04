const db = require("../models");
const ResetToken = db.resetToken;
const validate = require("../validation/resetToken.validation");

exports.create = (req, res) => {
  // validate request
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  //  Create a Order
  const resetToken = {
    email: req.body.email,
    token: req.body.token,
  };

  //   Save order in the database
  ResetToken.create(resetToken)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the ResetToken",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  ResetToken.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving ResetTokens",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  ResetToken.findOne({
    where: { id: id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ResetToken with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  ResetToken.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ResetToken was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update ResetToken with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ResetToken with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  ResetToken.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ResetToken was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete ResetToken with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting ResetToken with id = " + id,
      });
    });
};
