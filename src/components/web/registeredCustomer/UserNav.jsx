import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'; //to add hover
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import ShoppingCart from "./Cart";
import PropTypes from 'prop-types';
import NavButtonStyle from "../../../css/web/common.module.css";
import "../../../css/web/cart.css";

UserNav.propTypes = {
    
};

function UserNav(props) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const navlink = {
        color: "white",        
        padding: "10px",
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
            <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor: '#291B1B', maxWidth: '100%'}}>
            <Navbar.Brand href="#home" style={{marginTop: '-20px'}}>
                    <img src={logo} alt={logo} width={100} height={100}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="/chome" style={navlink}><HoverText1>Home</HoverText1></Nav.Link>
                        <Nav.Link href="/cproduct" style={navlink}><HoverText1>Product</HoverText1></Nav.Link>
                        <Nav.Link href="/cabout-us" style={navlink}><HoverText1>About Us</HoverText1></Nav.Link>
                        <Nav.Link href="/ccontact-us" style={navlink}><HoverText1>Contact Us</HoverText1></Nav.Link>
                    </Nav>
                    <Form inline>                
                        <Row>
                            <Col>
                                <Link to="/login" >
                                    <ShoppingCart></ShoppingCart>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/login" ><button className={NavButtonStyle.btn}>Logout</button></Link>
                            </Col>
                        </Row>                   
                    </Form>    
                </Navbar.Collapse>            
            </Navbar>            
            <br />    
        </div>
    );
}

export default UserNav;