const db = require("../models");
const ResetToken = db.resetToken;

// retreive single object
exports.findOne = (req, res) => {
    const token = req.params.token;
    ResetToken.findOne({
      where: { token: token },
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