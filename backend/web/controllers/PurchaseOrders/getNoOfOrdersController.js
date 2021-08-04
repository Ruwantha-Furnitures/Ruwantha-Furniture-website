const { PurchaseOrders } = require("../../models");
const mysql = require("mysql");

//get no of item list
const getNoOfOrdersController  = async (req, res) => {
    // var sql = "SELECT count(*) as total FROM trn_employee"; 
    // var query = connection.query(sql, function(err, result) {
    //     console.log("Total Records:- " + result[0].total);
    // });
    

    try {
      const products = await PurchaseOrders.findAll(); // getting all the product 
      res.json({ products }); // to send the response of data  
      console.log('no of rows')   
      console.log(res[0].total)
    } catch (error) {
      console.log(error);
    }    
}
module.exports = { getNoOfOrdersController };

