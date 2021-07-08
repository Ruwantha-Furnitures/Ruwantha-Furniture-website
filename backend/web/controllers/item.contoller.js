const { Item } = require("../models/item.model");
const mysql = require("mysql");

//get all item list
const ItemController = (req, res) => {
    Item.getAllItem((err, items) => {
        console.log("All Items");
        if (err) res.send(err);
        console.log("Items", items); // Not print in the console
        res.send(items);
    });
}
module.exports = { ItemController };

// exports.itemList = (req, res) => {
//     // find all Customer information from 
//     try{
//         Item.findAll({attributes: ['itemid', 'name', 'typeid', 'price', 'quantity', 'details']})
//         .then(itemList => {
//             res.status(200).json(itemList);
//         })
//     }catch(error) {
//         // log on console
//         console.log(error);

//         res.status(500).json({
//             message: "Error!",
//             error: error
//         });
//     }
// }

