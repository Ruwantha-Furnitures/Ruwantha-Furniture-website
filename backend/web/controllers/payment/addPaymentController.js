const { Payment } = require('../../models');
const mysql = require("mysql");

const AddPaymentController  = async (req,res) => {    
    const  {Orderid,Price,Date} = req.body;
    const payment = { orderid:Orderid, price:Price, date:Date};
    console.log("Print");

    try{        
        const PaymentData = await Payment.create(payment);                
        if(PaymentData){
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

module.exports = { AddPaymentController };


