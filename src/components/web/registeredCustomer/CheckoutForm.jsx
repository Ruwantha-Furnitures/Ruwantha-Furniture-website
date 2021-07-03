import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FormStyle from "../../../css/web/Form.module.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "../../../css/web/Login.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function CheckoutForm() {
    const backcontainer = {
        marginTop: "20px",
        backgroundColor: "#CAC1C1",
        padding: "5px",
        borderRadius: "20px",        
        marginBottom: "15px",
      };
      const innercontainer = {        
        backgroundColor: "#FFF",
        padding: "30px",
        borderRadius: "20px",
        width: "100%"
      };

    return (
    <div>         
        <Container style={backcontainer}>                
            <Container style={innercontainer}>
                <center><h2 style={{margin: '20px'}}>Your Order</h2></center>
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
                {/*<center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Checkout</button></center>*/}
                <Link to='/customer_checkout'><center><Button variant="success">Checkout</Button></center></Link>
           </Container>
        </Container>
    </div>
    )
}

export default CheckoutForm;
