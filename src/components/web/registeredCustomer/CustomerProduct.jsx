import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import ProductBox from "./CustomerAllProducts";

function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {        
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>               
        <Container fluid align="center"> 
            <ProductBox></ProductBox>
        </Container>
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;
