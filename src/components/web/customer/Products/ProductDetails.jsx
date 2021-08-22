import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonStyle from "../../../../css/web/common.module.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Rating } from '@material-ui/lab';
import Box from "@material-ui/core/Box";
import FormStyle from "../../../../css/web/Form.module.css";
import axios from "axios";

function ProductDetails() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [productDetails, setProductDetails] = useState({}); //at initial state contains a empty object, while when the response received that would set the product details to setProductDetails
  const [value, setValue] = React.useState(1);
  const [rateData,setRateDetails]=useState([]);   
  const [rating, setRating] = useState(1);
  const [haveRating, setHaveRating] = React.useState(false);

  useEffect(() => {
    const itemID = localStorage.getItem("productID");
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/product/${itemID}`); // wil receive the response
        console.log(res.data); //view the response object data
        setProductDetails(res.data); // set the response data to the state of productDetails object
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getRate()
  }, []);
  
  const getRate = async() => {
      var sellProducts =[];
      const product_id = localStorage.getItem("productID");
      const setRateDetailsResponse = await axios.get(`http://localhost:8080/api/productReviewForAProduct/${product_id}`);   
      setRateDetails(setRateDetailsResponse.data)         

      const noOfRows = setRateDetailsResponse.data.length

      var newobject = setRateDetailsResponse.data;
      // console.log(newobject);

      if((Number)(newobject.length) >= 1 ){
        var sumRating = 0
        var finalRating = 0
          console.log(newobject);
          for(let i=0; i<(Number)(newobject.length); i++){
              sellProducts.push(newobject[i]);     
              // console.log(sellProducts[i].rating_points)   
              sumRating = (Number)(sellProducts[i].rating_points) + (Number)(sumRating)  
              finalRating = (Number)(sumRating) /(Number)(noOfRows)    
              setHaveRating(true)            
          }            
          setRating(finalRating) 
      }
      // console.log(finalRating)      
      console.log(rating)           
  }        

  console.log(rating) 
  return (
    <div>
      <Container>
        <Card
          className={FormStyle.cardbox}
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            padding: "30px",
            boxShadow: "0px 0px 5px #000",
          }}
        >
          <Row className="justify-content-md-center" xs={12}>
            <Col sm={6}>
              <img
                src={productDetails.img_location}
                className={CommonStyle.Productimage}
                alt="items"
              ></img>
            </Col>
            <br />
            <Col sm={6}>
              <Container>
                <center>
                  <h2>{productDetails.name}</h2>
                  <h4>{`Rs. ${productDetails.price}`}</h4>
                  <br />
                  <p align="justify">{productDetails.description}</p>
                  <br />                                       
                      <Box component="fieldset" mb={3} borderColor="transparent">
                          <Rating name="read-only" value={rating} readOnly />
                      </Box>                                        
                  <Link to="/login">
                    <button class="addtocart">Add to cart</button>
                  </Link>{" "}
                </center>
              </Container>
            </Col>
          </Row>
        </Card>
        <br />
      </Container>
    </div>
  );
}

export default ProductDetails;
