const db = require("../models");
const OnlineCustomer = db.onlineCustomer;

// retreive single object using email
exports.findOne = (req, res) => {
    const AccID = req.params.accountId;
    OnlineCustomer.findOne({
      where: { account_id: AccID, is_deleted: 0 },
    })
        .then((data) => {            
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
            message: "Error retrieving Account with account_id = " + AccID,
        });
    });
};
  
