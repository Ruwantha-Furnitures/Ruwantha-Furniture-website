import React,{useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Rating from "../Common/StartRating";
import "../../../css/web/Home.css";
import axios from "axios";

const AllProductCards = props => {    
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [itemCount, setItemCount] = React.useState(0);
    const [products,setProducts]=useState([])

    // to load the product when the page is first rendered
    useEffect(() => {
        viewAllProducts();
    },[])

    const BASE_URL='../../../assets/items/'
    const type='.jpg'

    const viewAllProducts = async() => {
        try {
           console.log('Requests send') // done
           let response =await axios.get('http://192.168.56.1:3002/api/products/')
           console.log(response.data.products); // received products from the backend API
           setProducts(response.data.products);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }
  
    const innercontainer = {
      backgroundColor: "transparent",
      padding: "6px",
      borderRadius: "20px",
      display: "flex",      
      alignItems: "center"           
    };
    const funitureimg = {
      marginTop: "30px",      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '20px'
    };
    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        // backgroundColor: '#2196F3',
        padding: '10px'
      }

    // const num = [3, 8, 11, 7, 5];

    // const num2x = num.map((n) => n * 2);

    // console.log(num2x); 

    // return (
    //     <div className="users">
    //       {data.map((user) => (
    //         <div className="user">{user}</div>
    //       ))}
    //     </div>
    // );    

    // const photo = require(`../../uploads/images/${obj.photo}`).default;
    return (
        <div style={gridContainer}>
            
            {products.map((productList) =>(    
                <center>
                <Card style={{width: '18rem'}}>                                        
                    <center>      
                    <img src={process.env.PUBLIC_URL + '/items/'+ productList.itemid +'.jpg'} alt='items' style={funitureimg} width={200} height={150}></img>                  
                        {/* <img                               
                                 //src={`../../../assets/items/${productList.itemid}.jpg`}                                     
                            
                                src = {`${BASE_URL}${productList.itemid.toString()}${type}`}
                                alt = ''                              
                                width={200}
                                height={150}
                                // style={funitureimg}
                            /> */}

                            {/* <p>../../../assets/items/${productList.itemid}.jpg</p> */}
                            </center>
                            <center> {productList.name} </center>                                                   
                                    <p class="textinbox">                        
                                        Rs. {productList.price}<br />                                        
                                    </p>
                                    <center>    
                                        <Rating></Rating>
                                    </center>
                                    <center>
                                        <Link to="/viewProductDetail"><button class="addtocart">Read More</button></Link>
                                    </center>                                                           
                    </Card>    
                    </center>                                        
            ))}
        </div>
    )
}

export default AllProductCards


