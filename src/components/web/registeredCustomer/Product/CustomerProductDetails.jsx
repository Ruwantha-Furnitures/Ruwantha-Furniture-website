import React , { useState , useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import FormStyle from "../../../../css/web/Form.module.css";
import CommonStyle from "../../../../css/web/common.module.css";
import axios from "axios";

function CustomerProductDetails() {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [productDetails,setProductDetails]=useState({}) //at initial state contains a empty object, while when the response received that would set the product details to setProductDetails
    const [itemCount, setItemCount] = React.useState(0);//have to get the no of the products from cart table

    //adding selected product Id to the localstorage
    function setCartValue(itemCount) {
        //cart label number
        alert(`hello cart value, ${itemCount}`);
        localStorage.setItem("CartCount", itemCount);
        setItemCount(itemCount);
    }
    
    useEffect(() => {   
        const itemID=localStorage.getItem('productID')
        const fetchData=async() =>{
            try{
                const res=await axios.get(`http://192.168.56.1:3002/api/products/viewProduct/${itemID}`); // wil receive the response
                console.log(res.data) //view the response object data
                setProductDetails(res.data) // set the response data to the state of productDetails object
            }catch (error){
              console.log(error);
            } 
        }
        fetchData()
       
    }, []);

  

    return (        
        <div>            
            <Container>
                <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', padding:'30px', boxShadow:'0px 0px 5px #000'}}>                         
                    <Row className="justify-content-md-center" xs={12}>
                        <Col sm={6}>
                            <img src={process.env.PUBLIC_URL + '/items/'+ productDetails.itemid +'.jpg'} className={CommonStyle.Productimage} alt='items'></img>                  
                        </Col>
                        <br />
                        <Col sm={6}>
                            <Container>
                                <center>
                                    <h2>{productDetails.name}</h2>
                                    {/* <input 
                                        type='text' 
                                        style = {{color : 'black'}}
                                        value ={productDetails.name}
                                    /> */}
                                    <h4>{`Rs. ${productDetails.price}.00 /=`}</h4><br />
                                    <p align='justify'>{productDetails.details}</p><br />
                                    <Rating></Rating>
                                    {/* <Link to="/cart"><button onClick={() => setCartValue(itemCount + 1)} class="addtocart">Add to cart </button></Link> */}
                                    <button onClick={() => setCartValue(itemCount + 1)} class="addtocart">Add to cart </button>
                                </center>
                            </Container>
                        </Col>                        
                    </Row>                                                
                </Card>
                <br />
            </Container>    
        </div>
    )
}

export default CustomerProductDetails
