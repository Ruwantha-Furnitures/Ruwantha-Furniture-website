const { Account } = require("../../models");
const mysql = require("mysql");

const ForgotPasswordController  = async (req, res) => {    
    const { email } = req.body.data;
    const data = {email};       
    try {
        const validcustomer = await Account.findOne({ where: {email:data.email}});
        console.log("create the table row");
        if(validcustomer){
            res.json({
                auth:true,
            });
        }else{
            res.json({
                auth:false,
            });
        }         
    }catch (error) {
        console.error(error);
    }
    
}
module.exports = { ForgotPasswordController };

