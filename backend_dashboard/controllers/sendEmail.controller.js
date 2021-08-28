const sendEmail = require("../common/emailSignup");

exports.findAll = (req, res) => {    
    const email = req.params.email;
    sendEmail(email);
};