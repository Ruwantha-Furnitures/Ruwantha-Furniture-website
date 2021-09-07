import React,{useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import "../../../../css/web/Home.css";
import CommnStyles from "../../../../css/web/common.module.css";
import axios from "axios";

const ProductCards = () => {    
    require("bootstrap/dist/css/bootstrap.min.css");    
    // const [itemCount, setItemCount] = React.useState(0);
    const [products,setProducts]=useState([])    
    const [value, setValue] = React.useState(1);
    const [rateData,setRateDetails]=useState([]);   
    const [rating, setRating] = useState(1);
    const [haveRating, setHaveRating] = React.useState(false);

    // to load the product when the page is first rendered
    useEffect(() => {
        viewAllProducts();        
    },[])

    const viewAllProducts = async () => {
        try {           
           let response = await axios.get("http://localhost:8080/api/product");
           console.log(response.data); // received products from the backend API
           setProducts(response.data);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }

    //adding selected product Id to the localstorage
    function sayHello(itemid) {
        //alert(`hello, ${itemid}`);
        localStorage.setItem("productID", itemid);
        console.log(localStorage.getItem("productID"));  
        
        //cart label number
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
            {products.slice(0,4).map((productList) =>(  
            <Container>
                <Row sm={12}>
                    <Col sm={3}>
                        <center>
                        <Card style={{width: '18rem'}} > 
                            <center>      
                                <img src={productList.img_location} alt='items' style={funitureimg} width={200} height={150}></img>    
                                {/* src={process.env.PUBLIC_URL + '/items/'+ productList.itemid +'.jpg'}               */}
                            </center>
                            <br />
                            <center> {productList.name} </center>                                                   
                                <p class="textinbox">                        
                                    Rs. {productList.price}<br />                                        
                                </p>
                            <center>    
                                <Rating dataFromParent = {productList.id} ></Rating>
                            </center>
                            <center>
                                <Link to="/viewProduct"><button class="addtocart" onClick={() => sayHello(productList.id)}>Read More</button></Link>
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

export default ProductCards


