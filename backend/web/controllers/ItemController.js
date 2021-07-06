const { Item } = require("../models");
const mysql = require("mysql");

// get all employee list
exports.getItemList = (req, res)=> {    
    Item.getAllItem((err, items) =>{
        console.log('All Items');
        if(err)
        res.send(err);
        console.log('Items', items);
        res.send(items)
    })
}

// const ItemController = (req, res) => {
//     console.log(req.body.data)
//     const { name, email, password, address, contactNo } = req.body.data;
//     const userLevel = 1;

//     bcrypt.hash(password, saltrounds, async (err, hash) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const accountData = {
//           email,
//           password: hash,
//           userlevel:userLevel,
//         };

//         try {
//           const AccountDetails = await Account.create(accountData);
//           const aid = AccountDetails.aid;
  
//           const customerData = {
//             aid,
//             name,
//             address,
//             telephone: contactNo,
//           };
  
//           const CustomerDetails = await Customer.create(customerData);
//           console.log(CustomerDetails.name);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     });
// };

module.exports = { ItemController };