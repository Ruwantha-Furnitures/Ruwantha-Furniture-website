import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container, Row, Col } from "reactstrap";
import CustomerCheckoutForm from "./CheckoutForm";
import CustomerCartDetails from "../Cart/CartDetails";

function ViewCart() {
    return (
        <div>
            <Navigation></Navigation> 
            <Container>                
                <Row sm={12}>
                    <Col sm={8}>                        
                        <CustomerCartDetails></CustomerCartDetails>
                    </Col>

                    <Col sm={4}>
                        <CustomerCheckoutForm></CustomerCheckoutForm>  
                    </Col>
                </Row>                                                                                                                              
            </Container>    
            <br /><br />  
            <br /><br />  
            <br /><br />        
            <br /><br />
            <Footer></Footer>  
        </div>
    )
}
export default ViewCart
