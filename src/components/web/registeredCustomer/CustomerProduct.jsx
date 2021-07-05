import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import ProductBox from "./CustomerAllProducts";
import Search from "../Common/SearchProduct";
import Topimg from '../../../assets/background.jpg';

function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {        
        backgroundImage: `url(${Topimg})` ,
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>  
        <Container>
            <Row sm={12}>
                <Col>
                    <Search></Search>
                </Col>                
            </Row> 
        </Container>                    
        <Container fluid align="center"> 
            <ProductBox></ProductBox>
        </Container>
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;
