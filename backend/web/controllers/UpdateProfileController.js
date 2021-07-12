const { Customer, Account } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const UpdateProfileController = async (req, res) => {
  const accountID = req.params.accID;
  const { name, address, telephone } = req.body.data;
  const data = { name, address, telephone };
  try {
    const update = await Customer.update(
      { name, address, telephone },
      { where: { aid: accountID } }
    );
    // res.json({});
    if (update >= 1) {
      res.json({ status: "Successful", name, address, telephone });
    } else {
      res.json({ status: "Unsuccessful" });
    }
    // console.log(update + " updated");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UpdateProfileController };
