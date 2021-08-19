const { Account } = require("../../models");
const sendEmail = require("../../../common/email_password_recovery");
const mysql = require("mysql");

const ForgotPasswordController  = async (req, res) => {    
    const { email } = req.body.data;
    const data = {email};       
    try {
        const validcustomer = await Account.findOne({ where: {email:data.email}});
        console.log(data.email);
        if(validcustomer){
            // sendEmail(email)
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

