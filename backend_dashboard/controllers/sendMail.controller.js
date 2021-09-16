// const sendEmail = require("../common/emailSignup");
const { parseInt } = require("lodash");
const nodemailer = require("nodemailer");

exports.create = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: "ucscarmagic@gmail.com",
    to: email,
    subject: "Driver created account",
    html: `     <h3>Dear Driver,</h3>
                <p>You have successfully created your account and now you have been added to our system as an official driver. When there are orders the company will notify you on the details about the deliveries that you will have to do. Good luck with your new journey!</p>
                <p>Login Credentials Following here....</p>
                <p>Email   :: ${email}</p>
                <p>Passowrd:: ${password}</p>
                <p>Thank you</p>
                <p>Regards,</p>
                <p>AR Magic.</p>`,
  };

  try {
    let result = await transporter.sendMail(options);
    res.status(200).send({
      message: "Email Send to " + email,
    });
  } catch (error) {
    console.log(error);
  }
};

// retreive single object
exports.sendAssignMail = async (req, res) => {
  const msg_level = req.params.id;
  const driver_email = req.body.email;
  let order_id = req.body.order_id;

  order_id =
    parseInt(order_id) < 10
      ? "000" + order_id
      : parseInt(order_id) < 100
      ? "00"
      : parseInt(order_id) < 1000
      ? "0" + order_id
      : order_id;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  if (parseInt(msg_level) === 1) {
    // assign driver
    const options = {
      from: "ucscarmagic@gmail.com",
      to: driver_email,
      subject: "Driver assign order",
      html: ` <h3>Dear Driver,</h3>
              <p>You have been assigned with a delivery order ${order_id}. Please check the deliveries tab in order to view more details regarding the order.</p>
              <p>Thank you</p>
              <p>Regards,</p>
              <p>AR Magic.</p>`,
    };

    try {
      let result = await transporter.sendMail(options);
      console.log(result);
      res.status(200).send({
        message: "Email Send to " + driver_email,
      });
    } catch (error) {
      console.log(error);
    }
  } else if (parseInt(msg_level) === 2) {
    // assign driver
    const options = {
      from: "ucscarmagic@gmail.com",
      to: driver_email,
      subject: "Driver rejects an assigned order",
      html: ` <h3>Dear Driver,</h3>
              <p>You have successfully rejected the order ${order_id} and we have now notified the rejection to the owner. You will be assigned to future orders and will be notify on them.</p>
              <p>Thank you</p>
              <p>Regards,</p>
              <p>AR Magic.</p>`,
    };

    try {
      let result = await transporter.sendMail(options);
      console.log(result);
      res.status(200).send({
        message: "Email Send to " + driver_email,
      });
    } catch (error) {
      console.log(error);
    }
  } else if (parseInt(msg_level) === 3) {
    // assign driver
    const options = {
      from: "ucscarmagic@gmail.com",
      to: driver_email,
      subject: "Remind driver",
      html: ` <h3>Dear Driver,</h3>
              <p>This is to remind that you have an order pending which you have to deliver to the customer. Hope this reminder will help you.</p>
              <p>Thank you</p>
              <p>Regards,</p>
              <p>AR Magic.</p>`,
    };

    try {
      let result = await transporter.sendMail(options);
      console.log(result);
      res.status(200).send({
        message: "Email Send to " + driver_email,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
