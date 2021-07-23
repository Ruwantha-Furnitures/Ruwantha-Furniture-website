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
    category_id: req.body.category_id,
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
