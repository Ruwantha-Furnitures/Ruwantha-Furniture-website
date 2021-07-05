import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../Common/StartRating";
import item from "../../../assets/items/1.jpg";
import "../../../css/web/Home.css";

function AllProductCards() {
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
      marginTop: "30px",      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '20px'
    };

    return (
    <div >  
        <Row sm={12}>            
            <Col sm={4}>                
                <div>
                    <center>
                    {/*<Card style={{ width: '18rem',background: 'rgb(0,0,0,0.8)', color:'white', marginBottom: '20px', border:'solid 1px black', borderRadius: '20px'}}>*/}
                    <Card style={{ width: '18rem' , border: 'solid 1px black'}}>
                        <center>
                        <img variant="top"
                            src={item}
                            alt={item}
                            width={200}
                            height={150}
                            style={funitureimg}
                        />
                        </center>
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
                                    <Link to="/viewProduct"><button class="addtocart">Read More</button></Link>
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

export default AllProductCards;
