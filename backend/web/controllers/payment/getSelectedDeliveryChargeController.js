const { DeliveryCharge } = require("../../models");
const mysql = require("mysql");

const GetSelectedDeliveryChargeController = async (req, res) => {  
  const district = req.params.area;
  try {
    const result = await DeliveryCharge.findOne({ where: { area: district } });
    console.log(result);
    const { chargeid, area, amount } = result;
    res.json({ chargeid, area, amount });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { GetSelectedDeliveryChargeController };
