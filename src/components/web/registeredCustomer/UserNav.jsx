import React from "react";
import styled from "styled-components"; //to add hover
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../../assets/nlogo.png";
import ShoppingCart from "./Cart";
import Person from "./PersonIcon";
import NavButtonStyle from "../../../css/web/common.module.css";
import "../../../css/web/cart.css";

function UserNav() {
  require("bootstrap/dist/css/bootstrap.min.css");
    return (             
        <div> 
            <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor: '#291B1B', maxWidth: '100%'}}>
                <Navbar.Brand href="#home" style={{marginTop:'0px'}}>
                    <img src={logo} alt={logo} width={50} height={50}></img>
                </Navbar.Brand>
                <Navbar.Brand>
                    AR Magic  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="/customer_home">Home</Nav.Link>
                        <Nav.Link href="/customer_product">Product</Nav.Link>                        
                        <Nav.Link href="/customer_contact-us">About</Nav.Link>
                    </Nav>
                    <Form inline>                
                       <Row>
                            <Col>
                                <Link to="/viewProfile" >
                                    <Person></Person>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/login" >
                                    <ShoppingCart></ShoppingCart>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/login" ><button className={NavButtonStyle.btn} style={{marginTop:'-10px'}}>Logout</button></Link>
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
