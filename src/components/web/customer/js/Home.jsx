import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Topimg from '../../../../assets/topimg1.jpg';
import ProductBox from "./ProductCards";
import Navigation from "./Indexnav";
import Slideshow from './Banner';
import ContactFormHome from "./ContactForm";
import Footer from "../../Common/js/Footer";
import '../css/Home.css';  
import PropTypes from 'prop-types';

Home.propTypes = {
    
};

function Home(props) {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        padding: '0',
        margin: '0'
    }
    return (
        <div>
            <Navigation></Navigation>                     
            <Slideshow></Slideshow>
            <ProductBox></ProductBox>    
            <div className="col-md-12">         
                <Row>
                <Col sm={8} style={contactImg}></Col>
                <Col sm={4}><ContactFormHome></ContactFormHome></Col>              
                </Row>
                
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;