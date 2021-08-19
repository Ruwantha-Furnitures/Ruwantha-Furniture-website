import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import "../../../../css/web/Login.css";

function CheckoutForm() {

    return (
    <div>   
        <Card style={{marginBottom: '20px'}}>      
            <Form style={{padding: '20px',margin: '10px'}}>            
                <center><h2>Your Order</h2></center><br />
                <Row sm={12}>
                    <Col sm={6}>
                        <Form.Label>Total Purchase</Form.Label>  
                    </Col>
                    <Col sm={6}>
                        <Form.Label>Rs. {parseFloat(localStorage.getItem('cartTotal')).toFixed(2)}</Form.Label> 
                    </Col>
                </Row> 
                <Row sm={12}>
                    <Col sm={6}>
                        <Form.Label style={{fontSize:'16px'}}><b>After Discount</b></Form.Label>  
                    </Col>
                    <Col sm={6}>
                        <Form.Label style={{fontSize:'16px'}}><b>Rs. {localStorage.getItem('afterDiscount')}</b></Form.Label> 
                    </Col>
                </Row> 
                <Row sm={12}>
                    <Col>
                        <Form.Label><i style={{fontSize:'9px'}}>**Delivery charged will be added. Click on Continue for payment</i></Form.Label>  
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
