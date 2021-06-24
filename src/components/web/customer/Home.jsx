import React from "react";
import { Container, Row, Col } from "reactstrap";
import ConForm from "../Common/ContactForm";
import Topimg from "../../../assets/topimg6.jpg";
import ProductBox from "./ProductCards";
import Navigation from "./Indexnav";
import Slideshow from './Banner';
import Footer from "../Common/Footer";
import "../../../css/web/Home.css";


function Home() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` ,
    repeat: 'none',
    padding: '15px',
    MaxWidth: "100%"
  };

  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ProductBox></ProductBox>
      <div style={contactImg}>
        <Container align="left">
          <ConForm></ConForm>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
