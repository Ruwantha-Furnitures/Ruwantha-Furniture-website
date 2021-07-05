import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductBox from "../registeredCustomer/CustomerProductCard";
import Part2 from "../Common/LandingPagepart2";
import ConForm from "../Common/ContactForm";
import Topimg from '../../../assets/topimg19.jpg';
import Navigation from "./UserNav";
import Slideshow from "../customer/Banner";
import Footer from "../Common/Footer";
import "../../../css/web/Home.css";
import "../../../css/web/common.module.css";
import Card from 'react-bootstrap/Card';

function CustomerHome() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` ,
    repeat: 'none',
    padding: '30px',    
    MaxWidth: "100%"
  };
  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ProductBox></ProductBox>
      <Part2></Part2>
      <div>
        <Card align="left" style={contactImg}>          
          <ConForm></ConForm>
        </Card>        
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default CustomerHome;
