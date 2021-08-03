const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions), fileUpload());

// Upload Endpoint
// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const file = req.files.file;
//   file.mv(`${__dirname}/public/uploads/${file.name}`, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

const db = require("./models");
db.sequelize.sync();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
require("./routes/category.routes")(app);
require("./routes/type.routes")(app);
require("./routes/product.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/deliveryDriver.routes")(app);
require("./routes/assignOrderDetails.routes")(app);
require("./routes/imageUpload.routes")(app);

// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
