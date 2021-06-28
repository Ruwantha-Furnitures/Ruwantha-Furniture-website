import React from 'react';
import { Container, Row, Col } from "reactstrap";
import productImg from "../../../assets/items/1.jpg";
import close from "../../../assets/close.png";

function CartDetails() {
    const backcontainer = {
        marginTop: "20px",
        backgroundColor: "#CAC1C1",
        padding: "20px",
        borderRadius: "20px",        
        marginBottom: "15px",
      };
      const innercontainer = {        
        backgroundColor: "#FFF",
        padding: "10px",
        borderRadius: "20px",
        width: "100%",        
      };
    return (
        <div>
            <Container style={backcontainer}>
                <Row sm={12}>
                    <Col sm={12}>
                        <Container style={innercontainer}>
                            <Row sm={12} align="justify">
                                <Col sm={3}>
                                    <img src={productImg} style={{width:'100px', borderRadius: '20px'}}></img>
                                </Col>
                                <Col sm={7}>
                                    <h4>Serena Single Seater</h4>
                                </Col>
                                <Col sm={2}>
                                <img src={close} style={{width:'30px', borderRadius: '20px'}}></img>
                                </Col>
                            </Row>
                        </Container>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default CartDetails
