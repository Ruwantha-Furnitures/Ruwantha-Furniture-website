const { Category } = require("../../models");
const mysql = require("mysql");

//get all category
const getAllCategoryController  = async (req, res) => {    
    try {
      const category = await Category.findAll(); // getting all the product    
      res.json({ category }); // to send the response of data
    } catch (error) {
      console.log(error);
    }    
}
module.exports = { getAllCategoryController };