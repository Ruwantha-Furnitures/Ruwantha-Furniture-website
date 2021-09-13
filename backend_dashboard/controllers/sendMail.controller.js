// const sendEmail = require("../common/emailSignup");
const { parseInt } = require("lodash");
const nodemailer = require("nodemailer");

exports.create = async(req, res) => {    
    const email = req.body.email;
    const password = req.body.password;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ucscarmagic@gmail.com",
          pass: "TYPucsc123",
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    
      const options = {
        from: "ucscarmagic@gmail.com",
        to: email,
        subject: "Driver Account has been created",
        html: `<h1>Welcome to AR Magic Family</h1><br />
                <p>Thank you for joining. We're delighted to have you here. We are hoping to bring the finest possible service to make customer happy!!</p>
                <p>Login Credentials Following here....</p>
                <p>Email:: ${email}</p>
                <p>Passowrd:: ${password}
                <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
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
exports.sendAssignMail = async(req, res) => {
  
  const msg_level = req.params.id;
  const driver_email = req.body.email;
  let order_id = req.body.order_id;

  order_id = parseInt(order_id)<10 ? "000"+ order_id : parseInt(order_id)<100 ? "00": parseInt(order_id)<1000? "0"+order_id: order_id


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  if(parseInt(msg_level) === 1) { // assign driver
    const options = {
      from: "ucscarmagic@gmail.com",
      to: driver_email,
      subject: "Driver Assign For Order",
      html: `<h1>You Have New order of ${order_id}</h1><br />
              <p>Thank you for joining. We're delighted to have you here. We are hoping to bring the finest possible service to make customer happy!!</p>
              <p>Thank you</p>
              <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
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
  else if(parseInt(msg_level) === 2) { // assign driver
    const options = {
      from: "ucscarmagic@gmail.com",
      to: driver_email,
      subject: "Driver Assign Deleted From Order",
      html: `<h1>You Relase From order of ${order_id}</h1><br />
              <p>Thank you for joining. We're delighted to have you here. We are hoping to bring the finest possible service to make customer happy!!</p>
              <p>Thank you</p>
              <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>`,
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