import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';
import CustomerCheckoutForm from "./CheckoutForm";

function ViewCart() {
    return (
        <div>
            <Navigation></Navigation> 
            <Container>
                <center><h2>My Cart</h2></center>
                <Row sm={12}>
                    <Col sm={8}>

                    </Col>
                    <Col sm={4}>
                        <CustomerCheckoutForm></CustomerCheckoutForm>  
                    </Col>
                </Row>                                                                                                                 
            </Container>            
            <Footer></Footer>  
        </div>
    )
}
export default ViewCart
