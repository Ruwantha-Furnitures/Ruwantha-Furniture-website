import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import item1 from "../../../assets/items/10.jpg";
import item2 from "../../../assets/items/9.jpg";
import item3 from "../../../assets/items/11.jpg";
import item4 from "../../../assets/items/14.jpg";
import "../../../css/web/Home.css";
import { Card } from "react-bootstrap";

function ProductCards() {
    require("bootstrap/dist/css/bootstrap.min.css");

    const [itemCount, setItemCount] = React.useState(0);

    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title><center><h2>Image Gallary</h2></center></Card.Title><br />
                <Row sm = {12}>
                    <Col sm={3}>
                        <Card>
                            
                        </Card>
                    </Col>                   
                </Row>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCards;