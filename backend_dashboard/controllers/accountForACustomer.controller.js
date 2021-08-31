const db = require("../models");
const Account = db.account;

// update the object
exports.update = (req, res) => {
    const email = req.params.email;
  
    Account.update(req.body, {
      where: { email: email, is_deleted: 0 },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Account was updated successfully",
          });
        } else {
          res.send({ message: `Cannot update Account with id=${id}` });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Account with id = " + id,
        });
      });
  };