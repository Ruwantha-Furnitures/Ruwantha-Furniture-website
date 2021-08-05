const { Payment } = require('../../models');
const mysql = require("mysql");

const AddPaymentController  = async (req,res) => {    
    const  {orderid,price,date} = req.body.data;
    const payment = {orderid,price,date};    
    console.log(orderid)
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


