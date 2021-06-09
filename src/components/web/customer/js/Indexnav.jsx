import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'; //to add hover
import { Container, Row, Col } from 'reactstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from "../../../../assets/logo.png";
import PropTypes from 'prop-types';
import NavButtonStyle from "../css/common.module.css"

Indexnav.propTypes = {
    
};

function Indexnav(props) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const navlink = {
        color: "white",        
        padding: "20px",
        marginTop: "0px"
      };

      const HoverText = styled.p`
        color: #111;
        :hover {
          color: #FC7A30;
          cursor: pointer;
        }
      `

      const HoverText1 = styled.p`
        color: #fff;
        :hover {
          color: #FC7A30;
          cursor: pointer;
        }
      `
    return (        
            <div> 
            <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#291B1B', maxWidth:'100%'}}>
            <Navbar.Brand href="#home" style={{marginTop:'-20px'}}>
                    <img src={logo} alt={logo} width={100} height={100}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" style={navlink}><HoverText1>Home</HoverText1></Nav.Link>
                        <Nav.Link href="/product" style={navlink}><HoverText1>Product</HoverText1></Nav.Link>
                        <Nav.Link href="/about-us" style={navlink}><HoverText1>About Us</HoverText1></Nav.Link>
                        <Nav.Link href="/contact-us" style={navlink}><HoverText1>Contact Us</HoverText1></Nav.Link>
                    </Nav>
                    <Form inline>                
                        <Row>
                            <Col sm={6}>
                                <a href="/signup" ><button className={NavButtonStyle.btn}>Sign Up</button></a>
                            </Col>
                            <Col sm={6}>
                                <a href="/login" ><Button className={NavButtonStyle.btn}>Login</Button></a>
                            </Col>
                        </Row>                   
                    </Form>    
                </Navbar.Collapse>            
            </Navbar>            
            <br />    
        </div>
    );
}

export default Indexnav;