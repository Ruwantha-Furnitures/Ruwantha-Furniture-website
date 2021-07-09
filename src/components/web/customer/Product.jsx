import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import Topimg from '../../../assets/background.jpg';
import Coverimg from '../../../assets/productbanner.png';
import { CardImg } from 'react-bootstrap';

function Product() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,              
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>          
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>     
                    <Search></Search>               
                    <Card.Img variant="top" src={Coverimg} />                    
                    <Card.Body>  
                        <center>
                            <ProductBox></ProductBox>
                        </center>                                                 
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row>                                         
        <Footer></Footer>    
    </div>
    )
}

export default Product;
