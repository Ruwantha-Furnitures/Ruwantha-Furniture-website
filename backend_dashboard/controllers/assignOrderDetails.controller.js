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
