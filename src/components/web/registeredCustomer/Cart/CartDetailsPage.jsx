import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container, Row, Col } from "reactstrap";
import CustomerCheckoutForm from "./CartOrderDetailsForm";
import CustomerCartDetails from "./CartTable";

function ViewCart() {
    return (
        <div>
            <Navigation></Navigation> 
            <Container fluid>                
                <Row sm={12}>
                    <Col sm={9}>                        
                        <CustomerCartDetails></CustomerCartDetails>
                    </Col>

                    <Col sm={3}>
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
