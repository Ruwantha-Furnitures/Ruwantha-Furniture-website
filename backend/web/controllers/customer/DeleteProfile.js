const { Account } = require("../../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

//get all item list
const DeleteProfileController  = async (req, res) => {    
    const accountID = req.params.accID;
    const { password } = req.body.data;    
    const data = {password};

    try {

        const account = await Account.findOne({ where: {custid:accountID}});              
        if (account === null) {
          res.json({
            auth: false,                         
          });
        } else {
          const existingPassword = account.password;
          const userLevel=account.userlevel;
          const accountID = account.aid;
          bcrypt.compare(data.password, existingPassword, (error, result) => {
            if (result) {
              console.log(userLevel)
              res.json({ auth: true });
            } else {
              res.json({
                auth: false,
                errorMessage:
                  "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
              });
            }
          });
        }
    }catch (error) {
        console.log(error);
    }
    
}
module.exports = { DeleteProfileController };

