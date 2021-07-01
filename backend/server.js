//this is the server file

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const { customerRouter } = require("./web/routes/Customers.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", customerRouter);

async function connectDB() {
  try {
    await connection.connect();
    console.log("Connected to Database");
  } catch (error) {
    console.log("error");
  }
}

app.listen(3002, () => {
  console.log("Application is running on the port 3002");
  connectDB();
});