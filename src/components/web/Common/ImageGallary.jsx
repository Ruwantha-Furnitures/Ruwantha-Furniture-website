import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "reactstrap";
import item1 from "../../../assets/gallary/1.png";
import item2 from "../../../assets/gallary/2.jpg";
import item3 from "../../../assets/gallary/3.jpeg";
import item4 from "../../../assets/gallary/4.jpg";
import item5 from "../../../assets/gallary/5.jpg";
import item6 from "../../../assets/gallary/6.jpg";
import item7 from "../../../assets/gallary/7.jpg";
import item8 from "../../../assets/gallary/8.jfif";

function ImageGallary() {
    const cardimg = {
        justifyItem: 'center'
    }
    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title><center><h2>Image Gallary</h2></center></Card.Title><br />
                <Row sm = {12}>
                    <Col sm={3}>
                        <Card style={cardimg}>
                            <center><img src={item1} style={{width: '300px', height: '300px'}} alt='item1'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item2} style={{width: '300px', height: '300px'}} alt='item2'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item3} style={{width: '300px', height: '300px'}} alt='item3'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item4} style={{width: '300px', height: '300px'}} alt='item4'></img></center>
                        </Card>
                    </Col>                   
                </Row>                
                <Row sm = {12}>
                    <Col sm={3}>
                        <Card style={cardimg}>
                            <center><img src={item5} style={{width: '300px', height: '300px'}} alt='item5'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item6} style={{width: '300px', height: '300px'}} alt='item6'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item7} style={{width: '300px', height: '300px'}} alt='item7'></img></center>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <center><img src={item8} style={{width: '300px', height: '300px'}} alt='item8'></img></center>
                        </Card>
                    </Col>                   
                </Row>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default ImageGallary
