const sendEmail = require("../common/emailSignup");

exports.sendEmail = (req, res) => {    
    const email = req.params.email;
    sendEmail(email);
  };