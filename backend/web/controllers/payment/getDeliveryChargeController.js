const { DeliveryCharge } = require("../../models");
const mysql = require("mysql");

//get all item list
const getDeliveryChargeController  = async (req, res) => {
    console.log("Delivery Charge Controller");
    try {
      const deliveryCharge = await DeliveryCharge.findAll(); // getting all the product
      console.log(deliveryCharge);
      res.json({ deliveryCharge }); // to send the response of data
    } catch (error) {
      console.log(error);
    }    
}
module.exports = { getDeliveryChargeController };