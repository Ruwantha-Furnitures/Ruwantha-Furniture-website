const { PurchaseOrders } = require("../../models");
const mysql = require("mysql");

//get no of item list
const getNoOfOrdersController  = async (req, res) => {
    try {
        console.log("in getNoOfOrdersController")
        const count = await PurchaseOrders.findAndCountAll();        
        res.json(count)             
    }catch (error) {
        console.log(error);
    }    
}
module.exports = { getNoOfOrdersController };

