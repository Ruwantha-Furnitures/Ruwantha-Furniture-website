import React from 'react';
import Card from 'react-bootstrap/Card';
import OurVision from "../../../assets/visionbanner.JPG";
import Form from "./ContactForm";
import webapp from "../../../assets/6.png";
import { Container, Row, Col } from "reactstrap";

function LandingPagepart2() {
    return (
        <div>
            <Container>
            <Row sm={12} align="center">  
                    <Col sm={12}>
                        <Card>
                        <Card.Img variant="top" src={OurVision} />
                        </Card>  
                        <br />
                    </Col>                             
                </Row>
            </Container>                        
        </div>
    )
}

export default LandingPagepart2
