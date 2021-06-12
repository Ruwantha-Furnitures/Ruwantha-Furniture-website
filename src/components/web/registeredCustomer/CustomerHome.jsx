import React from "react";
import { Container, Row, Col } from "reactstrap";
import Topimg from "../../../assets/topimg1.jpg";
import ProductBox from "../customer/ProductCards";
import Navigation from "./UserNav";
import Slideshow from "../customer/Banner";
import Footer from "../Common/Footer";
import "../../../css/web/Home.css";
import "../../../css/web/common.module.css";
import PropTypes from "prop-types";

CustomerHome.propTypes = {};

function CustomerHome(props) {
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

export default CustomerHome;
