import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from './Home';
import Product from './Product';
import AboutUs from './About';
import ContactUs from './Contact.js';
import "../../../index.css";
import logo from "../../../assets/logo.png";


class indexnav extends React.Component{
    render(){
      const navlink = {
        color: "white",
        fontweight: "bold"
      };

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                          <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#291B1B'}}>   
                                <Navbar.Brand href="#home"><img src={logo} alt={logo} width={100} height={100}></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                      <Nav.Link href="/" style={navlink}>Home</Nav.Link>
                                      <Nav.Link href="/product" style={navlink}>Product</Nav.Link>
                                      <Nav.Link href="/about-us" style={navlink}>About Us</Nav.Link>
                                      <Nav.Link href="/contact-us" style={navlink}>Contact Us</Nav.Link>
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
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/product">
                                    <Product />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default indexnav;