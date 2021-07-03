//this is the server file

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const db=require("./web/models")
const { customerRouter } = require("./web/routes/customers.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", customerRouter);
connectDB();

async function connectDB() {
  try {
    await db.sequelize.sync();
    app.listen(3002, () => {
      console.log("Application is running on the port 3000");
    });
  }catch(error){
    console.log("error");
  }
}
