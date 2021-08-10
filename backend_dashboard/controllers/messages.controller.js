const db = require("../models");
const Message = db.messages;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.first_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const message = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    contact_number: req.body.contact_number,
    email: req.body.email,
    details: req.body.details,
  };

  //   Save customer in the database
  await Message.create(message)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Message",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  Message.findAll({ where: { is_deleted: 0 } })
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
  Message.findOne({ where: { id: id, is_deleted: 0 } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Message with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  Message.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Message was updated successfully",
        });
      } else {
        res.send({ message: `Cannot update Message with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Message with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  Message.update(
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
          message: "Message was deleted successfully",
        });
      } else {
        res.send({ message: `Cannot delete Message with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Message with id = " + id,
      });
    });
};
