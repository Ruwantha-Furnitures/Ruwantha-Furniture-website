import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import ProductBox from "./CustomerAllProducts";
import Search from "../Common/SearchProduct";
import Coverimg from '../../../assets/productbanner.png';
import Card from 'react-bootstrap/Card';


function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,              
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>  
        <Container>
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>     
                    <Search></Search>               
                    <Card.Img variant="top" src={Coverimg} />                    
                    <Card.Body>
                        <Container fluid align="center">                             
                            <ProductBox></ProductBox>
                        </Container>                        
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row> 
        </Container>                                       
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;

