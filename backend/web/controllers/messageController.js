const { Message } = require('../models');
const mysql = require("mysql");

const messageController = (req,res) => {
    const {name, telephone, email, details} = req.body.data;

    try{
        const messageData = {
            name,
            telephone,
            email,
            details
        }

        const messageDetails = await.Message.create(messageData);
        console.log("create the table row")
        if(messageDetails){
            res.json({
                auth:true,
            });
        }else{
            res.json({
                auth:false,
            });
        }    
        console.log(messageDetails.name);    
    }catch(error){
        console.log(error);
    }
}

module.exports = { messageController };
