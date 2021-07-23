const { Cart } = require('../../models');
const mysql = require("mysql");

const AddCartController  = async (req,res) => {
    // const { name, telephone, email, description } = req.body.data;
    const  { itemid , accountID } = req.body.data;
    const messageData = { custid: accountID, itemid};

    try{        
        const CartSubmit = await Cart.create(messageData);        
        console.log("create the table row");
        if(CartSubmit){
            res.json({
                auth:true,
            });
        }else{
            res.json({
                auth:false,
            });
        }            
    }catch(error){
        console.log(error);
    }
}

module.exports = { AddCartController };


