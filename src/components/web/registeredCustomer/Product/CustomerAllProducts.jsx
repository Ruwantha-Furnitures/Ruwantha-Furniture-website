import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import "../../../../css/web/Home.css";
import CommnStyles from "../../../../css/web/common.module.css";
import axios from "axios";

const CustomerAllProducts = (props) => {
  require("bootstrap/dist/css/bootstrap.min.css");
  // const [itemCount, setItemCount] = React.useState(0);
  const [products, setProducts] = useState([]);

  // to load the product when the page is first rendered
  useEffect(() => {
    viewAllProducts();
  }, []);

  const viewAllProducts = async () => {
    try {
      console.log("Requests send"); // done
      let response = await axios.get("http://192.168.8.192:3002/api/products/");
      console.log(response.data.products); // received products from the backend API
      setProducts(response.data.products); // set the received products into the products state array
    } catch (error) {
      console.log(error);
    }
  };

  const funitureimg = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  };

  return (
    <div className={CommnStyles.gridContainer}>
      {products.map((productList) => (
        <Container>
          <Row sm={12}>
            <Col sm={3}>
              <center>
                <Card style={{ width: "18rem" }}>
                  <center>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/items/" +
                        productList.itemid +
                        ".jpg"
                      }
                      alt="items"
                      style={funitureimg}
                      width={200}
                      height={150}
                    ></img>
                  </center>
                  <center> {productList.name} </center>
                  <p class="textinbox">
                    Rs. {productList.price}
                    <br />
                  </p>
                  <center>
                    <Rating></Rating>
                  </center>
                  <center>
                    <Link to="/viewProductDetail">
                      <button class="addtocart">Read More</button>
                    </Link>
                  </center>
                </Card>
                <br />
              </center>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default CustomerAllProducts;
