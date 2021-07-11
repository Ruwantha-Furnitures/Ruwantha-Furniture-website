import React from 'react';
import { Container, Row, Col } from "reactstrap";
import item4 from "../../../assets/items/14.jpg";
import CommonStyle from "../../../css/web/common.module.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import FormStyle from "../../../css/web/Form.module.css";

function ProductDetails() {
    require("bootstrap/dist/css/bootstrap.min.css");
    
    return (        
        <div>
            <Container>
            <br /><br />
            <Card className={FormStyle.cardbox} style={{borderRadius: '20px', padding: '20px'}}>            
                <Row className="justify-content-md-center" xs={12}>
                <Col>                
                    <Row className="justify-content-md-center" xs={12}>
                        <Col sm={5}>
                            <img src={item4} className={CommonStyle.Productimage} alt='product'></img>
                        </Col>
                        <br />
                        <Col sm={7}>
                            <Container>
                                <center>
                                    <h1>Canton Dining Suite</h1>
                                    <h2>Rs. 72,975</h2><br />
                                    <p align='justify'>Enjoy a nice dining experience with the 5 piece Canton dining suite. Distinctive table design with tempered glass overlay will lead to a clean finish. The appealing chair pattern, paired with the ample seating capacity, will enhance aesthetics and comfort.</p><br />
                                    <Link to="/login"><button class="addtocart">Add to cart</button></Link>
                                </center>
                            </Container>
                        </Col>
                    </Row>                
                </Col>
            </Row>
            </Card>            
            </Container>
            <br /><br />
            <br /><br />            
        </div>
    )
}

export default ProductDetails;
