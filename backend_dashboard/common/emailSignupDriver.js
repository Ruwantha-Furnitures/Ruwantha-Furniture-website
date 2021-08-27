const nodemailer = require("nodemailer");
module.exports = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "armagic24@outlook.com",
      pass: "armagic1234",
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const options = {
    from: "armagic24@outlook.com",
    to: email,
    subject: "Account has been created",
    html: `<h1>Welcome to AR Magic</h1><br />
            <p>Thank you for signing. We're delighted to have you here. We hope to have a strong bond with you. We also anticipate excellent service from you..</p>
            <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};
