const { Account } = require("../../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const ForgotPasswordController  = async (req, res) => {       
    const { email } = req.body.data;
    try {
        const result = await Customer.findOne({ where: { email: email } });
        res.json({ auth: true });
    }catch (error) {
        console.error(error);
    }
    
}
module.exports = { ForgotPasswordController };

