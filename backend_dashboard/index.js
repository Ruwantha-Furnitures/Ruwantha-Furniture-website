const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions), fileUpload());

const db = require("./models");
db.sequelize.sync();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
require("./routes/category.routes")(app);
require("./routes/type.routes")(app);
require("./routes/product.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/sellProduct.routes")(app);
require("./routes/deliveryDriver.routes")(app);
require("./routes/deliveries.routes")(app);
require("./routes/imageUpload.routes")(app);
require("./routes/order.routes")(app);
require("./routes/account.routes")(app);
require("./routes/cart.routes")(app);
require("./routes/deliveryCharges.routes")(app);
require("./routes/onlineCustomer.routes")(app);
require("./routes/messages.routes")(app);
require("./routes/payment.routes")(app);
require("./routes/shippingDetails.routes")(app);
require("./routes/productReview.routes")(app);
require("./routes/resetToken.routes")(app);


require("./routes/login.routes")(app);
require("./routes/signup.routes")(app);
require("./routes/onlineCustomerLogin.routes")(app);
require("./routes/cartForACustomer.routes")(app);
require("./routes/deliverychargefordistrict.routes")(app);
require("./routes/orderForACustomer.routes")(app);
require("./routes/sellProductForACustomer.routes")(app);
require("./routes/typeFoeACategory.routes")(app);
require("./routes/productForType.routes")(app);
require("./routes/productReviewForAProduct.routes")(app);


// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
