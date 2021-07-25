import React , { useState , useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import FormStyle from "../../../../css/web/Form.module.css";
import CommonStyle from "../../../../css/web/common.module.css";
import { Redirect } from 'react-router';
import axios from "axios";

function CustomerProductDetails() {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [productDetails,setProductDetails]=useState({}) //at initial state contains a empty object, while when the response received that would set the product details to setProductDetails    
    const [isSubmit, setIsSubmit] = useState(false);

    //adding selected product Id , account id in to the cart
    const setCartValue = async (itemid) => {
        
        // alert(`hello item value, ${itemid}`);

        let accountID=localStorage.getItem('userAccID');
        console.log(accountID);
        try{            
            const respond = await axios.post("http://192.168.56.1:3002/api/cart/addcart/",
                { itemid , accountID }
            );
            console.log("After the api call");
            if(respond.data.auth === true){
                setIsSubmit(true);
            }else{
                setIsSubmit(false);
            }            
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {   
        const itemID=localStorage.getItem('productID')
        const fetchData=async() =>{
            try{
                const res=await axios.get(`http://192.168.56.1:3002/api/products/viewProduct/${itemID}`); // wil receive the response
                //console.log(res.data) //view the response object data
                setProductDetails(res.data) // set the response data to the state of productDetails object
            }catch (error){
              console.log(error);
            } 
        }
        fetchData()
       
    }, []);

    const redirecCart = < Redirect to="/cart" />;

    return (       
        <React.Fragment>
            { (isSubmit === true) && (redirecCart) }
            { (isSubmit === false) && (
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
                                         <h4>{`Rs. ${productDetails.price}.00 /=`}</h4><br />
                                         <p align='justify'>{productDetails.details}</p><br />
                                         <Rating></Rating>
                                         {/* <Link to="/cart"><button onClick={() => setCartValue(itemCount + 1)} class="addtocart">Add to cart </button></Link> */}
                                         <button onClick={() => setCartValue( productDetails.itemid )} class="addtocart">Add to cart </button>
                                     </center>
                                 </Container>
                             </Col>                        
                         </Row>                                                
                     </Card>
                     <br />
                 </Container>    
                </div>
            )}
        </React.Fragment>        
    )
}

export default CustomerProductDetails
