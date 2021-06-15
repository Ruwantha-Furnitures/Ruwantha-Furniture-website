import React from "react";
import { Container, Row, Col } from "reactstrap";

import Topimg from "../../../assets/topimg1.jpg";
import ProductBox from "./ProductCards";
import Navigation from "./Indexnav";

<<<<<<< HEAD
import Slideshow from './Banner';
=======
import Slideshow from "./Banner";
// import ContactFormHome from "./ContactForm";
>>>>>>> master

import Footer from "../Common/Footer";
import "../../../css/web/Home.css";
import PropTypes from "prop-types";

Home.propTypes = {};

function Home(props) {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})`,
    padding: "0",
    margin: "0",
  };

  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ProductBox></ProductBox>

      <Footer></Footer>
    </div>
  );
}

export default Home;
