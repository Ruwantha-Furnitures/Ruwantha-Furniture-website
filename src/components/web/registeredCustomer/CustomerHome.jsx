import React from "react";
import { Container } from "reactstrap";
import ProductBox from "../registeredCustomer/CustomerProductCard";
import Part2 from "../Common/LandingPagepart2";
import ConForm from "../Common/CustomizeProduct";
import Topimg from '../../../assets/topimg19.jpg';
import Navigation from "./UserNav";
import Slideshow from "../customer/Banner";
import Footer from "../Common/Footer";
import Card from 'react-bootstrap/Card';
import Gallary from '../Common/ImageGallary';
import "../../../css/web/Home.css";
import "../../../css/web/common.module.css";

function CustomerHome() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` ,
    repeat: 'none',
    padding: '40px',    
    MaxWidth: "100%",    
  };
  const customize = {
    backgroundImage: `url(${Part2})` ,
    repeat: 'none',
    padding: '40px',    
    MaxWidth: "100%",    
  };
  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ProductBox></ProductBox>
      <Container fluid><Gallary></Gallary></Container>      
      <div>
        <Card style={contactImg}>               
          <Container align="left">
            <ConForm></ConForm>  
          </Container>          
        </Card>        
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default CustomerHome;
