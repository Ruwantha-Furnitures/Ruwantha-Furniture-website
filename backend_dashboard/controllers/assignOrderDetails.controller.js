const db = require("../models");
const AssignOrderDetails = db.assignOrderDetails;

exports.create = async (req, res) => {
  // validate request
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //  Create a Product
  const assignOrderDetails = {
    customer_id: req.body.customer_id,
    delivery_driver_id: req.body.delivery_driver_id,
  };

  //   Save assignOrderDetails in the database
  await AssignOrderDetails.create(assignOrderDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating the AssignOrder Details",
      });
    });
};

// retrieve the data
exports.findAll = (req, res) => {
  AssignOrderDetails.findAll({
    where: { is_deleted: 0 },
    include: ["customer", "deliveryDriver"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving Assign Order Details",
      });
    });
};

// retreive single object
exports.findOne = (req, res) => {
  const id = req.params.id;
  AssignOrderDetails.findOne({
    where: { id: id, is_deleted: 0 },
    include: ["customer", "deliveryDriver"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Assign Order Details with id = " + id,
      });
    });
};

// update the object
exports.update = (req, res) => {
  const id = req.params.id;

  AssignOrderDetails.update(req.body, {
    where: { id: id, is_deleted: 0 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Assign Order Details was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update Assign Order Details with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Assign Order Details with id = " + id,
      });
    });
};

// delete an object

exports.delete = (req, res) => {
  const id = req.params.id;
  AssignOrderDetails.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Assign Order Details was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete Assign Order Details with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Product with id = " + id,
      });
    });
};
