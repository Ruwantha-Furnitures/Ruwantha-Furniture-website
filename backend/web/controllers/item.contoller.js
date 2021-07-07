const { Item } = require("../models");
const mysql = require("mysql");

exports.allItems = (req, res) => {
    // find all Item information from 
    try{
        Item.findAll({attributes: ['itemid', 'name', 'typid', 'price', 'quantity', "details", "objectid"]})
        .then(allItems => {
            res.status(200).json(allItems);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

// exports.createItem = (req, res) => {
//     let item = {};

//     try{
//         // Building Customer object from upoading request's body
//         item.itemid = req.body.itemid;
//         item.name = req.body.name;
//         item.typid = req.body.typid;
//         item.price = req.body.price;
//         item.quantity = req.body.quantity;
//         item.details = req.body.details;
//         item.objectid = req.body.objectid;
    
//         // Save to MySQL database
//         Item.create(Item, 
//                           {attributes: ['itemid', 'name', 'typid', 'price', 'quantity', "details", "objectid"]})
//                     .then(result => {    
//                       res.status(200).json(result);
//                     });
//     }catch(error){
//         res.status(500).json({
//             message: "Fail!",
//             error: error.message
//         });
//     }
// }

