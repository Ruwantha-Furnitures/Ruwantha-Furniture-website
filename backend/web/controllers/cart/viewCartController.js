const { Cart } = require('../../models');
const { mysql } = require('mysql');

const viewCartController = async (req,res) => {
    const AccountID = req.params.accID;

    try{
        console.log("AccountID")
        console.log(AccountID)
        const products = await Cart.findOne({where: {custid: AccountID} });
        res.json({products});
    }catch(error){
        console.log(error);
    }
}

module.exports = {viewCartController};