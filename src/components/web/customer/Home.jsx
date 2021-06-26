import React from "react";
import { Container, Row, Col } from "reactstrap";
import ConForm from "../Common/ContactForm";
import CustomizeProduct from "../Common/LandingPagepart2";
import Topimg from "../../../assets/topimg18.jpg";
import ProductBox from "./ProductCards";
import Navigation from "./Indexnav";
import Slideshow from './Banner';
import Footer from "../Common/Footer";
import "../../../css/web/Home.css";


function Home() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` , 
    backgroundSize: 'cover',    
    repeat: 'none',    
    MaxWidth: "100%"
  };

  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ProductBox></ProductBox>
      <CustomizeProduct></CustomizeProduct>
      <div style={contactImg}>
        <Container align="center">
          <ConForm></ConForm>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
