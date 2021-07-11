import React from 'react';
import { Container, Row, Col } from "reactstrap";
import item4 from "../../../assets/items/14.jpg";
import CommonStyle from "../../../css/web/common.module.css";

function CustomerProductDetails() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const backcontainer = {
        marginTop: "20px",
        backgroundColor: "#CAC1C1",
        padding: "30px",
        borderRadius: "20px",
        width: "100%",
        marginBottom: "20px",
      };
      const innercontainer = {
        backgroundColor: "#FFF",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    return (        
        <div>            
            <Container style={backcontainer}>
            <Row className="justify-content-md-center" xs={12}>
            <Col>
                <Container style={innercontainer}>
                    <Row className="justify-content-md-center" xs={12}>
                        <Col sm={5}>
                            <img src={item4} className={CommonStyle.Productimage}></img>
                        </Col>
                        <br />
                        <Col sm={7}>
                            <Container>
                                <center>
                                    <h1>Canton Dining Suite</h1>
                                    <h2>Rs. 72,975</h2><br />
                                    <p align='justify'>Enjoy a nice dining experience with the 5 piece Canton dining suite. Distinctive table design with tempered glass overlay will lead to a clean finish. The appealing chair pattern, paired with the ample seating capacity, will enhance aesthetics and comfort.</p><br />
                                    <button class="addtocart">Add to cart</button>
                                </center>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Col>
            </Row>
            </Container>    
        </div>
    )
}

export default CustomerProductDetails
