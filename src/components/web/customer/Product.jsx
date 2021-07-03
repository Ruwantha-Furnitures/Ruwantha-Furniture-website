import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import Topimg from '../../../assets/background.jpg';
import Coverimg from '../../../assets/topimg18.jpg';

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
        <Row sm={12} align="justify">
            <Col sm={12}>
                <Card>
                    <Card.Img variant="top" src={Coverimg} text='AR Magic'></Card.Img>
                    <Card.Body>
                        <Container fluid align="center"> 
                            <ProductBox></ProductBox>
                        </Container>                        
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row>                                        
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;
