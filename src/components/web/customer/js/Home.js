import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import topimg from '../../../../assets/3.jpg';
import item1 from '../../../../assets/items/10.jpg';
import item2 from '../../../../assets/items/9.jpg';
import item3 from '../../../../assets/items/11.jpg';
import item4 from '../../../../assets/items/14.jpg';
import Navigation from "../js/indexnav";
import Footer from "../../Common/Footer";
import '../css/Home.css';  
  
class Home extends Component {
  render() {
    const backcontainer = {
      marginTop: "20px",
      backgroundColor: "#CAC1C1",
      padding: "30px",
      borderRadius: "20px",
      width: "100%",  
      marginBottom: "20px"
    };
    const innercontainer = {
      backgroundColor: "#FFF",
      padding: "6px",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",      
    };
    const funitureimg = {      
      marginTop: "10px",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    const topimage = {
      marginTop: "-50px",
      width: "100%",
      backgroundSize : "cover",
      backgroundRepeat: "no-repeat"       
    }
    return (    
        <div>   
          <Navigation></Navigation>                     
          <img src={topimg} alt="topimg" style={topimage} fluid/>
          <Container fluid="md" style={backcontainer}>
                <Row className="justify-content-md-center">
                    <Col>
                      <Container style={innercontainer}>
                          <div>
                            <center><img src={item1} alt={item1} width={200} height={150} style={funitureimg}/></center>
                            <p class="textinbox">Wiscon Sofa <br /> Rs. 191,675</p>                            
                            <center><button class="addtocart">Add to cart</button></center>
                          </div>
                      </Container>
                    </Col>
                    <Col>
                      <Container style={innercontainer}>
                          <div>
                            <center><img src={item2} alt={item1} width={200} height={150} style={funitureimg}/></center>
                            <p class="textinbox">Eliza Sofa<br /> Rs. 76,175</p>
                            <center><button class="addtocart">Add to cart</button></center>
                          </div>
                      </Container>
                    </Col>
                    <Col>
                    <Container style={innercontainer}>
                          <div>
                            <center><img src={item3} alt={item2} width={200} height={150} style={funitureimg}/></center>
                            <p class="textinbox">Serena Single Seater<br /> Rs. 30,875</p>
                            <center><button class="addtocart">Add to cart</button></center>
                          </div>
                      </Container>
                    </Col>
                    <Col>
                      <Container style={innercontainer}>
                          <div>
                            <center><img src={item4} alt={item3} width={200} height={150} style={funitureimg}/></center>
                            <p class="textinbox">Canton Dining Suite<br /> Rs. 72,975</p>
                            <center><button class="addtocart">Add to cart</button></center>
                          </div>
                      </Container>
                    </Col>                                        
                </Row>
                <Row className="justify-content-md-center">
                  <Col>
                    <center><button class="viewAll">View All Products</button></center>
                  </Col>
                </Row>             
            </Container>
            <Footer></Footer>
      </div>      
    );
  }
}
 
export default Home;