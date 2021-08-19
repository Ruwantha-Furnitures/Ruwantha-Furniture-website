const db = require("../models");
const Account = db.account;

// retreive single object using email
exports.findOne = (req, res) => {
    const email = req.params.email;
    Account.findOne({
      where: { email: email, is_deleted: 0 },
    })
        .then((data) => {            
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
            message: "Error retrieving Account with email = " + email,
            });
    });
};
  
