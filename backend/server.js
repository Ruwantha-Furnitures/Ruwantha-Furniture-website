//this is the server file

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const db = require("./web/models");

const { customerRouter } = require("./web/routes/customers.js");
const { productRouter } = require("./web/routes/Product.js");
const { contactusRouter } = require("./web/routes/contactus.js");
const { cartRouter } = require("./web/routes/cart.js");
const { PaymentRouter } = require("./web/routes/payment.js");
const { purchaseordersRouter } = require("./web/routes/purchaseorders");
const { categoryRouter } = require("./web/routes/category");
const { ForgotPasswordRouter } = require("./web/routes/forgotpassword");

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", customerRouter);
app.use("/api/products", productRouter);
app.use("/api/contactus", contactusRouter);
app.use("/api/cart", cartRouter);
app.use("/api/payment", PaymentRouter);
app.use("/api/purchseorders", purchaseordersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/forgetpassword", ForgotPasswordRouter);

connectDB();

async function connectDB() {
  try {
    await db.sequelize.sync();
    app.listen(3002, () => {
      console.log("Application is running on the port 3002");
    });
  } catch (error) {
    console.log("error");
  }
}
