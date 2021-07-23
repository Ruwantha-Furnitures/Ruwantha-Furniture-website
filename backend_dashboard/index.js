const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const db = require("./models");
db.sequelize.sync();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
require("./routes/category.routes")(app);
require("./routes/type.routes")(app);

// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
