import React from 'react';
import "../../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Avatar from '../../../../assets/shipping.png';
import CommonStyle from '../../../../css/web/common.module.css';

import {Customer, CurrencyType,PayhereCheckout, CheckoutParams} from 'payhere-js-sdk';
import {Payhere, AccountCategory} from "payhere-js-sdk";

// Sandbox 
Payhere.init("1217736",AccountCategory.SANDBOX)

const Checkout = () => {
    require("bootstrap/dist/css/bootstrap.min.css");
    function onPayhereCheckoutError(errorMsg) {
        alert(errorMsg)
    }

    const title={
        margin: '0px',
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    const textboxStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',
        height: '40px',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'        
    };
  
      async function checkout(){          
            // using async await
            try {
              const customer = new Customer({
                first_name: "Pavindu",
                last_name: "Lakshan",
                phone: "+94771234567",
                email: "plumberhl@gmail.com",
                address: "No. 50, Highlevel Road",
                city: "Panadura",
                country: "Sri Lanka",
              })
              const checkoutData = new CheckoutParams({
                returnUrl: 'http://localhost:3000/customer_thankyou',
                cancelUrl: 'http://localhost:3000/cancel',
                notifyUrl: 'http://localhost:8080/notify',
                order_id: '45896588',
                itemTitle: 'Canton Dining Suite',
                currency: CurrencyType.LKR,
                amount: 69826.25
              })
            
              const checkout = new PayhereCheckout(customer,checkoutData,onPayhereCheckoutError)
              checkout.start()
            }
            catch(err){
              console.log(err)
            }
      }

    return (
        <div>
            <Navigation></Navigation>             
            <Container>
            <Row sm={12}>
                <Col sm={8}>                    
                    <Card style={{marginBottom: '20px'}}>                        
                        <Form style={{padding: '20px'}}>                                                       
                            <Row style={rowStyle}>                                
                                <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                                <center><h2 style={title}>Shipping Details</h2></center>
                            </Row>                           
                            <h5>Personal Information</h5>
                            <Row sm={12}>
                                <Col sm={6}>
                                    <input type='text' placeholder='Enter your first name' style={textboxStyle}></input>
                                </Col>
                                <Col sm={6}>
                                    <input type='tel' placeholder='Enter your last name' style={textboxStyle}></input>
                                </Col>                                
                            </Row>    
                            <input type='tel' placeholder='Enter your telephone number' style={textboxStyle}></input>                        
                            <br /><br />
                            <h5>Shipping Address</h5>
                            <input type='text' placeholder='Enter your address' style={textboxStyle}></input>     
                            <input type='text' placeholder='Enter your city' style={textboxStyle}></input> 
                            <input type='text' placeholder='Enter your postal code' style={textboxStyle}></input> 
                            <br /><br />                                                     
                        </Form>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card style={{padding: '20px'}}>                        
                        <center><h2>Your Order</h2></center><br/>
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Total Purchase</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>72975</Form.Label> 
                            </Col>
                        </Row>                        
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Discount</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>5%</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>After Discount</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>69326.25</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Delivery Charge</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>500</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label><b>Total</b></Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label><b style={{fontSize: '20px'}}>Rs. 69826.25</b></Form.Label> 
                            </Col>
                        </Row>  
                        <br />   
                        <center>                                                                                     
                            {/* <PaymentModal
                                // Use a unique value for the orderId
                                // orderId={45896588}
                                // name="Canton Dining Suite"
                                // amount="69826.25"
                            /> */}
                            {/* <Link  to="/customer_paymentGateway"><button>Checkout Demo</button></Link> */}
                            <button onClick={checkout} className={CommonStyle.paybtn}>Pay with Payhere</button>
                        </center>                                                    
                        
                    </Card>
                </Col>
            </Row>  
            </Container>  
            <Footer></Footer>                   
        </div>
    );
};

export default Checkout;