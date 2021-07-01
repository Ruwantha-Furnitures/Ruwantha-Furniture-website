import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../Common/SearchProduct";
import Topimg from '../../../assets/background.jpg';

function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {  
        //backgroundImage: `url(${Topimg})` ,      
        backgroundColor: 'white',
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
