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
            <Navbar expand="lg"  sticky="top" style={{ maxWidth:'100%', marginTop:'0px', marginBottom: '20px'}}>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Select Category" id="category-dropdown" style={{border:'solid 1px lightgray', fontWeight:'bold', borderRadius: '5px'}}>
                        <NavDropdown.Item >Chair</NavDropdown.Item>
                        <NavDropdown.Item >Sofa</NavDropdown.Item>
                        <NavDropdown.Item >Bed</NavDropdown.Item>                    
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>                    
                </Form>
            </Navbar.Collapse>
            </Navbar>                       
        </div>
    );
}

export default SearchProduct;