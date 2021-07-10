const { Account } = require("../models");
const mysql = require("mysql");

//get all item list
const LoginController  = async (req, res) => {
    console.log("I am in Login..");
    const { password, userEmail } = req.body.data;
    const userlevelOwner = 0;
    const userlevelCustomer = 1;
    const userlevelAdmin = 2;
    const userlevelDriver = 3;
    
    const data = { email: userEmail, userlevel };

    try {
        const account = await Account.findOne({ data });
        if (account === null) {
          res.json({
            auth: false,
            errorMessage:
              "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
          });
        } else {
          const existingPassword = account.password;
          bcrypt.compare(password, existingPassword, (error, result) => {
            if (result) {
              const accessToken = createTokens(account);
              res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 30 * 1000,
              });
              res.json({ auth: true, accessToken });
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

