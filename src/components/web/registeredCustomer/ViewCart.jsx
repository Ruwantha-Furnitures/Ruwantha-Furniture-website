import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from "reactstrap";
import CustomerCheckoutForm from "./CheckoutForm";
import CustomerCartDetails from "./CartDetails";

function ViewCart() {
    return (
        <div>
            <Navigation></Navigation> 
            <Container>
                <center><h2>My Cart</h2></center>
                <Row sm={12}>
                    <Col sm={8}>
                        <CustomerCartDetails></CustomerCartDetails>
                    </Col>
               
                    <Col sm={4}>
                        <CustomerCheckoutForm></CustomerCheckoutForm>  
                    </Col>
                </Row>      
                <br /><br />                                                                                                          
            </Container>            
            <Footer></Footer>  
        </div>
    )
}
export default ViewCart
