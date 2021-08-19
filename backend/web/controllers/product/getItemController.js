const { Products } = require("../../models");
const mysql = require("mysql");

//get all item list
const getItemController = async (req, res) => {
  const productID = req.params.itemID;
  try {
        const selectedProduct = await Products.findOne({
            where: { itemid: productID },
        });
        console.log(selectedProduct);
        const { name, typeid, price, quantity, details, objectid,discount } =
            selectedProduct;
        res.json({
            state: "success",
            name,
            typeid,
            price,
            quantity,
            details,
            objectid,
            discount,
            itemid: productID,
        });
  } catch (error) {
      console.log(error);
  }
};
module.exports = { getItemController };
