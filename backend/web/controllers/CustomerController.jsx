const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const getCustomersController = (req, res) => {
  const { name, email, password, address, contactNo } = req.body.data;
  const userLevel = 1;
  const accountRegQuery =
    "INSERT INTO account(email,password,userlevel) VALUES(?,?,?)";
  const customerRegQuery =
    "INSERT INTO customer(aid,name,address,telephone) VALUES(?,?,?,?)";
  bcrypt.hash(password, saltrounds, (err, hash) => {
    if (err) {
      console.log("error");
    } else {
      console.log(hash);
      db.query(accountRegQuery, [email, hash, userLevel], (err, res) => {
        if (err) {
          console.log(err);
        } else {
          const accountID = res.insertId;
          db.query(
            customerRegQuery,
            [accountID, name, address, contactNo],
            (error, result) => {
              if (error) {
                console.log(error);
              } else {
                console.log("Successfully Registered");
              }
            }
          );
        }
      });
    }
  });
};

module.exports = { getCustomersController };
