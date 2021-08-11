import React from "react";
import { Row, Col } from "reactstrap";
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../../Common/SearchProduct";
import SliderProducts from "../../Common/ProductSlider";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Product = () => {
  const itemUpHandler = async (data) => {
    //console.log(data);
    try {
      await axios.get("http://localhost:8080/api/product", {
        data,
      });
      console.log("Request successful");
    } catch (error) {
      console.log(error);
    }
  };

  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    //backgroundImage: `url(${Coverimg})` ,
    MaxWidth: "100%",
  };
  return (
    <div style={contactImg}>
      <Navigation></Navigation>
      <Row sm={12} align="justify">
        <Col sm={12}>
          <Card>
            <Search></Search>

            <Card.Body>
              <center>
                <br />
                <SliderProducts></SliderProducts>
                <br />
                <ProductBox itemUpHandler={itemUpHandler}></ProductBox>
              </center>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

export default Product;
