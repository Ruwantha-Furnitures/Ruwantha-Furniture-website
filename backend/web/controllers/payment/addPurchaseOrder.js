const { PurchaseOrders } = require('../../models');
const mysql = require("mysql");

const AddPurchaseOrderController  = async (req,res) => {    
    const  {orderid,itemid,custid,fname,lname,address,city,telephone,chargeid} = req.body.data;
    const purchaseorder = { orderid,itemid,custid,fname,lname,address,city,telephone,chargeid};

    try{        
        const PurchaseOrderData = await PurchaseOrders.create(purchaseorder);                
        if(PurchaseOrderData){
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

module.exports = { AddPurchaseOrderController };


