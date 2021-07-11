import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import "../../../css/web/Login.css";

function CheckoutForm() {
    const rowStyle={
        margin: '10px'
    };    

    return (
    <div>   
        <Card style={{marginBottom: '20px'}}>      
            <Form style={{padding: '20px',margin: '10px'}}>            
                <center><h2>Your Order</h2></center><br />
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
                <Link to='/customer_checkout'><center><Button variant="success" style={{width: '100%'}}>Checkout</Button></center></Link>
           </Form>
        </Card>        
    </div>
    )
}

export default CheckoutForm;
