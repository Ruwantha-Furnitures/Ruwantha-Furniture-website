import React,{useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import "../../../../css/web/Home.css";
import CommnStyles from "../../../../css/web/common.module.css";

import axios from "axios";

const AllProductCards = props => {    
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [products,setProducts]=useState([])

    // to load the product when the page is first rendered
    useEffect(() => {
        viewAllProducts();
    },[])

    //adding selected product Id to the localstorage
    function sayHello(itemid) {
        // alert(`hello, ${itemid}`);
        localStorage.setItem("productID", itemid);
        console.log(localStorage.getItem("productID"));  
        
        //cart label number
    }

    const viewAllProducts = async() => {
        try {
           console.log('Requests send') // done
           let response =await axios.get('http://192.168.56.1:3002/api/products/')
           //console.log(response.data.products); // received products from the backend API
           setProducts(response.data.products);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }

    const funitureimg = {
        marginTop: "30px",      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '20px'
    };

    return (
        <div className={CommnStyles.gridContainer}>
            {products.map((productList) =>(  
            <Container>
                <Row sm={12}>
                    <Col sm={3}>
                        <center>
                        <Card style={{width: '18rem'}}> 
                            <center>      
                                <img src={process.env.PUBLIC_URL + '/items/'+ productList.itemid +'.jpg'} alt='items' style={funitureimg} width={200} height={150}></img>                  
                            </center>
                            <br />
                            <center> {productList.name} </center>                                                   
                                <p class="textinbox">                        
                                    Rs. {productList.price}<br />                                        
                                </p>
                            <center>    
                                <Rating></Rating>
                            </center>
                            <center>
                                <Link to="/viewProduct"><button class="addtocart" onClick={() => sayHello(productList.itemid)}>Read More</button></Link>
                            </center>                                                                                       
                        </Card> 
                        <br />   
                        </center>                                   
                    </Col>
                </Row>
                </Container>
            ))}                    
        </div>            
    )
}

export default AllProductCards


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


    // <div style={gridContainer}>
            
    //         {products.map((productList) =>(  
    //             <center>
    //             <Card style={{width: '18rem'}}> 
    //                 <center>      
    //                     <img src={process.env.PUBLIC_URL + '/items/'+ productList.itemid +'.jpg'} alt='items' style={funitureimg} width={200} height={150}></img>                  
    //                 </center>
    //                 <center> {productList.name} </center>                                                   
    //                     <p class="textinbox">                        
    //                         Rs. {productList.price}<br />                                        
    //                     </p>
    //                 <center>    
    //                     <Rating></Rating>
    //                 </center>
    //                 <center>
    //                     <Link to="/viewProductDetail"><button class="addtocart">Read More</button></Link>
    //                 </center>                                                           
    //             </Card>    
    //             </center>                                    
    //         ))}
    //     </div>