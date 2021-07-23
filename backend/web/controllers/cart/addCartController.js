const { Cart } = require('../../models');
const mysql = require("mysql");

const AddCartController  = async (req,res) => {    
    const  { itemid , accountID } = req.body;
    const cartData = { custid: accountID, itemid};
    console.log("Print");

    try{        
        const CartSubmit = await Cart.create(cartData);        
        console.log("create the cart table row");
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


