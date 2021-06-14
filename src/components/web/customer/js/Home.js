import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import topimg from "../../../../assets/topimg4.jpg";
import ProductBox from "../js/ProductCards";
import Navigation from "../js/indexnav";
import Footer from "../../Common/Footer";
import "../css/Home.css";
// import "../../../../css/web/test.less";

class Home extends Component {
  render() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const topimage = {
      marginTop: "-50px",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="bootstrap-scope">
        <Navigation></Navigation>
        <img src={topimg} alt="topimg" style={topimage} fluid />
        <ProductBox></ProductBox>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
