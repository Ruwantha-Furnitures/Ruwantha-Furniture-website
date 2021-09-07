const db = require("../models");
const Account = db.account;
const ResetToken = db.resetToken;
var crypto = require('crypto');
const nodemailer = require('nodemailer');
// const sendEmailPasswordRecovery = require("../common/emailPasswordReset");

// retreive single object using email
exports.findOne = (req, res) => {
    const email = req.params.email;
    console.log("in the password Recovery controller")
    Account.findOne({
      where: { email: email, is_deleted: 0 },
    })
    .then((user) => {
        if (user === null) {
            console.error('email not in database');
            res.status(403).send('email not in db');
        } else {
            const token = crypto.randomBytes(20).toString('hex');
            user.update({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
        });

        const resetToken = {
            email: email,
            token: token,
        };
        
        //   Save resetToken in the database
        ResetToken.create(resetToken)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the ResetToken",
            });
        });     

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "ucscarmagic@gmail.com",
                    pass: "TYPucsc123",
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailOptions = {
                from: 'ucscarmagic@gmail.com',
                to: `${user.email}`,
                subject: 'Link To Reset Password',
                html:`<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p><br />
                    Please click on the following link to complete the process within one hour of receiving it:<br />
                    <a href='http://localhost:3000/forgotPassword_changePassword/?token=${token}'>${token}</a><br />
                    If you did not request this, please ignore this email and your password will remain unchanged.<br />`
            };

            console.log('sending mail');            

            transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                    console.error('there was an error: ', err);
                } else {
                    console.log('here is the res: ', response);
                    res.status(200).json('recovery email sent');
                }
            });
        }
    });
};
//         .then((data) => {    
//             sendEmailPasswordRecovery(email)        
//             res.send(data);            
//         })
//         .catch((err) => {
//             res.status(500).send({
//             message: "Error retrieving Account with email = " + email,
//             });
//     });
// };
  
