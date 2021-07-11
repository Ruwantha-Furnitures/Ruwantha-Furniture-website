const { Account } = require("../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

//get all item list
const LoginController  = async (req, res) => {
    console.log("I am in Login..");    
    const { password, userEmail } = req.body.data;
    //console.log(password);
    
    const data = { email: userEmail };

    try {
        console.log('backend running');
        const account = await Account.findOne({ data });        
        if (account === null) {
          res.json({
            auth: false,                         
          });
        } else {
          const existingPassword = account.password;
          const userLevel=account.userlevel
          bcrypt.compare(password, existingPassword, (error, result) => {
            if (result) {
              // const accessToken = createTokens(account);
              // res.cookie("access-token", accessToken, {
              //   maxAge: 60 * 60 * 24 * 30 * 1000,
              // });
              console.log(userLevel)
              res.json({ auth: true, userlevel:userLevel });
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
    
}
module.exports = { LoginController };

