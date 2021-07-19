const { Item } = require("../models");
const mysql = require("mysql");

//get all item list
const getItemController  = async (req, res) => {

    const productID = req.params.itemID;

    try{
      const selectedProduct = await Item.findOne({ where : { itemid: productID}}) ;
      console.log(selectProduct);      
      const {name,typeid,price,quantity,details,objectid} =selectedProduct;
      res.json ({auth: true, name,typeid,price,quantity,details,objectid})      
    }catch (error){
      console.log(error);
    }

}
module.exports = { getItemController };

