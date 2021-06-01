import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'; //to add hover
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import "../../../../index.css";
import logo from "../../../../assets/logo.png";


class indexnav extends React.Component{
    render(){
      const navlink = {
        color: "white",
        fontweight: "bold",
        fontsize: "20px"        
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
                <div className="row">
                    <div className="col-md-12">                        
                          <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#291B1B'}}>   
                                <Navbar.Brand href="#home"><img src={logo} alt={logo} width={100} height={100}></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">                                      
                                      <Nav.Link href="/home" style={navlink}><HoverText>Home</HoverText></Nav.Link>
                                      <Nav.Link href="/product" style={navlink}><HoverText>Product</HoverText></Nav.Link>
                                      <Nav.Link href="/about-us" style={navlink}><HoverText>About Us</HoverText></Nav.Link>
                                      <Nav.Link href="/contact-us" style={navlink}><HoverText>Contact Us</HoverText></Nav.Link>
                                    </Nav>
                                      <Form inline>
                                      <div className="row">
                                        <div className="col-md-6">
                                            <Button class="btn">Sign Up</Button>
                                          </div>
                                          <div className="col-md-6">
                                            <Button class="btn">Login</Button>
                                          </div>
                                        </div>                                                                                
                                      </Form>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />                                                  
                    </div>
                </div>
            </div>
        )  
    }
}

export default indexnav;