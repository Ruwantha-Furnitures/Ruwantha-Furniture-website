import React, {useState} from 'react';
import "../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
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
        border: 'solid 2px gray', 
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
            <Container>
            <Row sm={12}>
                <Col sm={8}>
                    <Card style={{marginBottom: '20px'}}>                        
                        <Form style={{padding: '20px'}}>
                           <Row style={rowStyle}>                                
                                    <center><img src={logo} alt={logo} width={50} height={50}></img></center>
                                    <center><h3 style={title}>AR Magic</h3></center>
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
                            <div align="right">
                                <Button variant="outline-danger" type='reset'>Cancel</Button>{' '}
                                <Link to='/payment'><Button variant="success">Continue for payment</Button>{' '}</Link>
                            </div>                         
                        </Form>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Form style={{padding: '20px',margin: '10px'}}>
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
                        </Form>
                    </Card>
                </Col>
            </Row>  
            </Container>                                    
        </div>
    );
}

export default CustomerCheckoutDeteailsForm;