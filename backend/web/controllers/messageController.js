const { Message } = require('../models');
const mysql = require("mysql");

const messageController  = async (req,res) => {
    const { name, telephone, email, description } = req.body.data;
    const messageData = { name, telephone, email, details: description };

    try{        
        const messageSubmit = await Message.create(messageData);        
        console.log("create the table row");
        if(messageSubmit){
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

module.exports = { messageController };


