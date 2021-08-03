const { Cart } = require('../../models');
const { mysql } = require('mysql');

const viewCartController = async (req,res) => {
    const AccountID = req.params.accID;

    try{                
        const cartItems = await Cart.findAll({where: {custid: AccountID}}); // getting all the product in the cart
        console.log(cartItems);
        res.json({ cartItems }); // to send the response of data

    }catch(error){
        console.log(error);
    }
}

// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
//     Tutorial.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };

module.exports = {viewCartController};