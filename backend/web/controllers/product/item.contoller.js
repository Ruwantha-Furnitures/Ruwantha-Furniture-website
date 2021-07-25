const { Item } = require("../../models");
const mysql = require("mysql");

//get all item list
const ItemsController  = async (req, res) => {
    console.log("All Product");
    try {
      const products = await Item.findAll(); // getting all the product
      console.log(products);
      res.json({ products }); // to send the response of data
    } catch (error) {
      console.log(error);
    }    

    // const itemID = req.params.productID;
    // try{
    //   const selectedProduct = await Item.findOne({ where : { itemid: itemID}}) ;
    //   console.log(selectProduct);
    //   const {name,typeid,price,quantity,details,objectid} =selectedProduct;
    //   res.json ({auth: true, name,typeid,price,quantity,details,objectid})      
    // }catch (error){
    //   console.log(error);
    // }

}
module.exports = { ItemsController };

