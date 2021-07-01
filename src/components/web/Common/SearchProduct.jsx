import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";
import NavButtonStyle from "../../../css/web/common.module.css";

function SearchProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    return (
        <div>
            <Container> 
            <Navbar expand="lg"  sticky="top" style={{backgroundColor:'rgb(92, 75, 75)', maxWidth:'100%', marginTop:'0px', marginBottom: '20px'}}>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Select Category" id="category-dropdown" style={{backgroundColor: '#FFF', borderRadius: '5px'}}>
                        <NavDropdown.Item >Chair</NavDropdown.Item>
                        <NavDropdown.Item >Sofa</NavDropdown.Item>
                        <NavDropdown.Item >Bed</NavDropdown.Item>                    
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="success" style={{border:'solid 1px rgb(92, 75, 75)'}}>Search</Button>
                    
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <br />
            </Container>            
        </div>
    );
}

export default SearchProduct;