import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'; //to add hover
import { Container, Row, Col } from 'reactstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import "../../../../index.css";
import logo from "../../../../assets/logo1.png";


class indexnav extends React.Component{
    render(){
      const navlink = {
        color: "white",        
        padding: "10px",
        marginTop: "0px"
      };

      const HoverText = styled.p`
        color: #FFF;
        :hover {
          color: #FC7A30;
          cursor: pointer;
        }
      `

        return(
            <div>
                <Row>
                    <div className="col-md-12">                        
                        <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#291B1B'}}>   
                            <Navbar.Brand href="#home"><img src={logo} alt={logo} width={50} height={50}></img></Navbar.Brand>
                            <Navbar.Brand href="#home" style={{color: '#FC7A30', fontStyle:'italic'}}><center>Ruwantha <br /> Furniture</center></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">  
                                      <Nav.Link></Nav.Link>                                    
                                      <Nav.Link href="/home" style={navlink}><HoverText>Home</HoverText></Nav.Link>
                                      <Nav.Link href="/product" style={navlink}><HoverText>Product</HoverText></Nav.Link>
                                      <Nav.Link href="/about-us" style={navlink}><HoverText>About Us</HoverText></Nav.Link>
                                      <Nav.Link href="/contact-us" style={navlink}><HoverText>Contact Us</HoverText></Nav.Link>
                                    </Nav>
                                      <Form inline>
                                      <Row>
                                        <Col sm={6}>
                                            <a href="/signup" ><Button class="btn">Sign Up</Button></a>
                                        </Col>
                                        <Col sm={6}>
                                            <a href="/login" ><Button class="btn">Login</Button></a>
                                        </Col>
                                      </Row>                                                                                
                                      </Form>                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />                                                  
                    </div>
                  </Row>
            </div>
        )  
    }
}

export default indexnav;