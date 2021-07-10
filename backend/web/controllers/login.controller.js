const { Account } = require("../models");
const mysql = require("mysql");

//get all item list
const LoginController  = async (req, res) => {
    console.log("All Product");
    try {
      const products = await Item.findAll(); // getting all the product
      console.log(products);
      res.json({ products }); // to send the response of data
    } catch (error) {
      console.log(error);
    }
}
module.exports = { LoginController };

