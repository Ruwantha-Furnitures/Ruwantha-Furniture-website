const nodemailer = require("nodemailer");
module.exports = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "armagic24@outlook.com",
      pass: "armagic1234",
    },
  });

  const options = {
    from: "armagic24@outlook.com",
    to: email,
    subject: "Account has been created",
    html: `<h1>Thank you for creating new account,we are lookig forwar to having you and providing with you the best of services.</h1>`,
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};
