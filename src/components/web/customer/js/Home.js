import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import topimg from '../../../../assets/topimg4.jpg';
import ProductBox from "../js/ProductCards";
import Navigation from "../js/indexnav";
import Slideshow from '../js/Banner';
import Footer from "../../Common/js/Footer";
import '../css/Home.css';  
  
class Home extends Component {
  render() {
    const topimage = {
      marginTop: "-50px",
      width: "100%",
      backgroundSize : "cover",
      backgroundRepeat: "no-repeat"       
    }
    return (    
        <div>   
            <Navigation></Navigation>                     
            <Slideshow></Slideshow>
            <ProductBox></ProductBox>
            <Footer></Footer>
      </div>      
    );
  }
}
 
export default Home;