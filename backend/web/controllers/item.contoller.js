const { Item } = require("../models");
const mysql = require("mysql");

//get all employee list
const ItemController = (req, res) => {
    Item.getAllItem((err, items) => {
        console.log("All Items");
        if (err) res.send(err);
        console.log("Items", items);
        res.send(items);
    });
}

module.exports = { ItemController };