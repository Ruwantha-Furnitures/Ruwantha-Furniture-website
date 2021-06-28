import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';


function ViewCart() {
    return (
        <div>
            <Navigation></Navigation> 
            <Row sm={12}>
                <Col sm={8}>
                    <Container>
                        <Col sm={12}>
                            <Card>
                            <Card.Img variant="top" />
                            </Card>  
                            <br />
                        </Col> 
                    </Container>
                </Col>
                <Col sm={4}>
                    <Container>

                    </Container>
                </Col>
            </Row>
            <Footer></Footer>  
        </div>
    )
}
export default ViewCart
