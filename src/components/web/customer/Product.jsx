import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import Topimg from '../../../assets/background.jpg';
import Coverimg from '../../../assets/topimg20.jpg';
import { CardImg } from 'react-bootstrap';

function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,      
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
        <Container>
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>                    
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
