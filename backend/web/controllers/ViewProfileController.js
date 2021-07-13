const { Customer, Account } = require("../models");
const mysql = require("mysql");

const ViewProfileController = async (req, res) => {
  console.log(req.params.accID);
  const accountID = req.params.accID;
  try {
    const result = await Customer.findOne({ where: { aid: accountID } });
    console.log(result);
    const { name, address, telephone } = result;
    res.json({ auth: true, name, address, telephone });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { ViewProfileController };
