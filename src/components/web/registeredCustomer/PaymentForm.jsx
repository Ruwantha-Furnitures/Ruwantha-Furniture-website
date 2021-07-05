import React, {useState} from 'react';
import "../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import PaymentModal from './PaymentButton';  
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Subnavigation from "./Subnav";
import logo from "../../../assets/nlogo.png";

function CustomerCheckoutDeteailsForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");        

    const title={
        margin: '10px',
        padding: '5px',
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
        margin: '5px'            
    };

    function validateForm() {
        //Put the correct validation 
    }
      
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (                    
        <div>    
            <Navigation></Navigation>             
            <Container>
            <Row sm={12}>
                <Col sm={8}>                    
                    <Card style={{margin: '20px'}}>                        
                        <Form style={{padding: '20px'}}>                                                       
                            <h2 style={{textAlign:'center'}}>Shipping Details</h2>                            
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
                    <Card style={{padding: '20px',margin: '20px'}}>                        
                        <center><h2>Your Order</h2></center><br/>
                        <Row sm={12}>
                            <Col sm={7}>
                                <Form.Label>Total Purchase</Form.Label>  
                            </Col>
                            <Col sm={5}>
                                <Form.Label>Total</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={7}>
                                <Form.Label>Discount</Form.Label>  
                            </Col>
                            <Col sm={5}>
                                <Form.Label>Discount</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={7}>
                                <Form.Label><b>Total</b></Form.Label>  
                            </Col>
                            <Col sm={5}>
                                <Form.Label><b style={{fontSize: '20px'}}>Rs. Total</b></Form.Label> 
                            </Col>
                        </Row>  
                        <br />   
                        <center>                                                                                     
                            <PaymentModal
                                // Use a unique value for the orderId
                                orderId={45896588}
                                name="Canton Dining Suite"
                                amount="72975"
                            />
                        </center>                                                    
                        
                    </Card>
                </Col>
            </Row>  
            </Container>  
            <Footer></Footer>                                   
        </div>
    );
}

export default CustomerCheckoutDeteailsForm;
