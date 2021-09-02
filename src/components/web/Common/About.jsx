import React from 'react';
import Card from 'react-bootstrap/Card';
import topimg from "../../../assets/topimg17.jpg";
import vision from "../../../assets/visionmission.jpg";
import webapp from "../../../assets/6.png";
import { Container, Row, Col } from "reactstrap";
import Appicon from "../../../assets/google.svg";
import usermanual from "../../../assets/usermanual.jpg";


function CustomerAbout() {
    require("bootstrap/dist/css/bootstrap.min.css");
    return (
        <div>
            <Container>
                <Row sm={12} align="justify">
                    <Col sm={12}>
                        <Card>
                        <Card.Img variant="top" src={topimg} />
                        <Card.Body>
                            <Card.Title><center>What we do?</center></Card.Title>
                            <Card.Text>                    
                                We, AR Magic is one of the well experienced craftsmens, designers and professional
                                experts, who can create interiors that are stimulating, and sophisticated. 
                                Our journey began as a regular furniture store located in Mathugama offering our
                                customers branded furniture at an affordable price. We have a quite a large range 
                                of products which our currently available in our website as well. We always make sure 
                                to be updated in order to provide the latest trends to the customers.

                            </Card.Text>                            
                        </Card.Body>
                        </Card>  
                        <br />
                    </Col> 
                </Row>

                <Row sm={12} align="justify">
                    <Col sm={12}>
                        <Card>
                        <Card.Img variant="top" src={vision} />
                        <Card.Body>                            
                            <Card.Text>                    
                                <Row sm={12} align="center"> 
                                    <Col sm={4}>
                                        <Card style={{ width: '18rem' }}>                                        
                                        <Card.Body>
                                            <Card.Title><center>Our Vision</center></Card.Title>
                                            <Card.Text align="justify">       
                                            To be the best in providing furniture with the latest designs along with the highest userbase at affordable prices and to give the best-augmented reality shopping experience to our customers.
                                            </Card.Text>                            
                                        </Card.Body>
                                        </Card>  
                                        <br />
                                    </Col>
                                    <Col sm={4}>
                                        <Card style={{ width: '18rem' }}>                        
                                        <Card.Body>
                                            <Card.Title><center>Our Mission</center></Card.Title>
                                            <Card.Text align="justify">          
                                            Recognize our clients' needs and wants and satisfy them with great attention and commitment to producing standard furniture and give value to the money you spent.<br />
                                            </Card.Text>                            
                                        </Card.Body>
                                        </Card> 
                                        <br /> 
                                    </Col>
                                    <Col sm={4}>
                                        <Card style={{ width: '18rem' }}>                                        
                                        <Card.Body>
                                            <Card.Title><center>Our Achievements</center></Card.Title>
                                            <Card.Text align="justify">                  
                                            More than 5000+ customers reached our website throughout the last two months beginning from the month of May. 
                                            We were able to achieve our estimated revenue for the year 2021 in the middle of the year.
                                            </Card.Text>                            
                                        </Card.Body>
                                        </Card>  
                                        <br />
                                    </Col>                                                                         
                               </Row>
                            </Card.Text>                            
                        </Card.Body>
                        </Card>  
                        <br />
                    </Col> 
                </Row>

                <Row sm={12} align="justify">
                    <Col sm={12}>
                        <Card>
                        <Card.Img variant="top" src={webapp} />
                        <Card.Body>
                            <Card.Title><center>Our Website and Mobile App</center></Card.Title>
                            <Card.Text>                    
                            AR Magic website is aimed to provide you with the latest furniture models and accessories at a
                             price you can afford. We always consider the superior selection, value, and quality which we 
                             provide the customers. Also, our Mobile Application will be providing the Augmented reality technology where 
                             the customer can view the furniture with their home arrangement, which is not currently available
                              in Sri Lankan furniture industry. Our staff is ready to assist you with any questions regarding 
                              your purchases. Both App and the website pave the way to shop with great confidence that you the
                               customer will always be treated with the utmost care and respect.
                            </Card.Text>                            
                        </Card.Body>
                        <div align="right">
                            <a href="#" align="right" style={{padding: '20px'}}><img src={Appicon} width={130}/></a>{ ' '}
                            <a href="#" align="right" style={{padding: '20px'}}><img src={usermanual} width={70}/></a>   
                        </div>                     
                        </Card>  
                        <br />
                    </Col> 
                </Row>
            </Container>                                                    
        </div>                              
    );
}

export default CustomerAbout;