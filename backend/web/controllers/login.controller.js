const { Account } = require("../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

//get all item list
const LoginController = async (req, res) => {
  console.log("I am in Login..");
  console.log(req.body.data);
  const { password, email } = req.body.data;
  //console.log(password);
  console.log(email);
  const data = { email };

  try {
    console.log("backend running");
    console.log(data);
    const account = await Account.findOne({ where: { email: data.email } });
    console.log(account);
    if (account === null) {
      res.json({
        auth: false,
      });
    } else {
      const existingPassword = account.password;
      const userLevel = account.userlevel;
      bcrypt.compare(password, existingPassword, (error, result) => {
        if (result) {
          console.log(userLevel);
          res.json({ auth: true, userlevel: userLevel, email });
        } else {
          res.json({
            auth: false,
            errorMessage:
              "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { LoginController };
