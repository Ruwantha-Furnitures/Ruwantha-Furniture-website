import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../css/web/Login.css";
import FormStyle from "../../../css/web/Form.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
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
                                <Button variant="danger">Cancel</Button>{' '}
                                <Button variant="success">Continue for shopping</Button>{' '}   
                            </div>                         
                        </Form>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Form style={{padding: '20px'}}>
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
