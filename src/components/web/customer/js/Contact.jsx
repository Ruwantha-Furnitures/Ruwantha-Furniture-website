import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navigation from "./Indexnav";
import { Container, Row, Col } from "reactstrap";
import Topimg from "../../../../assets/topimg1.jpg";
import Footer from "../../Common/js/Footer";
import "../css/Form.css";

function Contact(props) {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})`,
    padding: "0",
    margin: "0",
  };
  return (
    <div className="col-md-12" style={contactImg}>
      <Navigation></Navigation>
      <center>
        <div class="formbox">
          <form>dfasfdsf</form>
        </div>
      </center>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
