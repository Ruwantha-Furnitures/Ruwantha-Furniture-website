import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../Common/StartRating";
import item from "../../../assets/items/1.jpg";
import "../../../css/web/Home.css";

function CustomerAllProducts() {
    require("bootstrap/dist/css/bootstrap.min.css");

    const [itemCount, setItemCount] = React.useState(0);
  
    const innercontainer = {
      backgroundColor: "transparent",
      padding: "6px",
      borderRadius: "20px",
      display: "flex",      
      alignItems: "center"           
    };
    const funitureimg = {
      marginTop: "10px",      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div>        
        <Row sm={12}>            
            <Col sm={4}>                
                <div>
                    <center>
                    <Card style={{ width: '18rem', marginBottom: '20px', border:'solid 1px black'}}>
                        <Card.Img variant="top"
                            src={item}
                            alt={item}
                            width={200}
                            height={150}
                            style={funitureimg}
                        />
                        <Card.Body>
                            <Card.Title><center>Canton Dining Suite</center></Card.Title>
                            <Card.Text>                    
                                <p class="textinbox">                        
                                    Rs. 72,975
                                </p>
                                <center>    
                                    <Rating></Rating>
                                </center>
                                <center>
                                    <Link to="/viewProduct"><button class="addtocart">View</button></Link>
                                </center>
                            </Card.Text>                            
                        </Card.Body>
                    </Card>          
                    </center>                              
                </div>                
            </Col>                
        </Row>        
    </div>
    )
}

export default CustomerAllProducts
