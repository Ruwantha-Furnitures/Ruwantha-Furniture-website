const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "armagic",
  });

const getProductsController=(req,res) => {
    connection.query("SELECT * FROM item",(error,result,fields)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    })
}

module.exports={getProductsController}