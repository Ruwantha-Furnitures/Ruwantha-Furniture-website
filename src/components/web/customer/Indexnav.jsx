import React from 'react';
// import styled from 'styled-components'; //to add hover
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { Navbar,Nav,Form} from 'react-bootstrap';
import logo from "../../../assets/nlogo.png";
import NavButtonStyle from "../../../css/web/common.module.css";

function Indexnav() {
    require("bootstrap/dist/css/bootstrap.min.css");
    // const navlink = {
    //     color: "white",        
    //     padding: "10px",
    //     marginTop: "20px"
    //   };

    //   const HoverText = styled.p`
    //     color: #111;
    //     :hover {
    //       color: #FC7A30;
    //       cursor: pointer;
    //     }
    //   `
    //   const HoverText1 = styled.p`
    //     color: #fff;
    //     :hover {
    //       color: #FC7A30;
    //       cursor: pointer;
    //     }
    //   `
    return (        
            <div> 
            <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#291B1B', maxWidth:'100%'}}>
                <Navbar.Brand href="#home" style={{marginTop:'0px'}}>
                    <img src={logo} alt={logo} width={50} height={50}></img>
                </Navbar.Brand>
                <Navbar.Brand>
                    AR Magic  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>                        
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>                
                        <Row>
                            <Col sm={6}>
                                <Link to="/signup" ><button className={NavButtonStyle.btn}>Sign Up</button></Link>
                            </Col>
                            <Col sm={6}>
                                <Link to="/login" ><button className={NavButtonStyle.btn}>Login</button></Link>
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