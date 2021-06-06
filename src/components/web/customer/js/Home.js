import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Topimg from '../../../../assets/topimg1.jpg';
import ProductBox from "../js/ProductCards";
import Navigation from "../js/indexnav";
import Slideshow from '../js/Banner';
import ContactFormHome from "./ContactForm";
import Footer from "../../Common/js/Footer";
import '../css/Home.css';  
  
class Home extends Component {
  render() {
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
            <Row>
              <Col sm={8} style={contactImg}></Col>
              <Col sm={4}><ContactFormHome></ContactFormHome></Col>              
            </Row>
            <Footer></Footer>
      </div>      
    );
  }
}
 
export default Home;