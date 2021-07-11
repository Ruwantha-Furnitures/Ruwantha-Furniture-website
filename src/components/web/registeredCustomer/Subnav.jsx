import React from 'react';
import styled from 'styled-components'; //to add hover
import { Container, Row, Col } from 'reactstrap';
import { Navbar,Nav } from 'react-bootstrap';

function Subnav() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const navlink = {
        color: "white", 
        marginTop: '10px',
        padding: "10px",        
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
         <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'rgb(92, 75, 75)', maxWidth:'100%', marginTop:'-30px', marginBottom: '20px'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >      
                <Nav className="mr-auto">
                    <Nav.Link href="changepassword">Change Password</Nav.Link>
                    <Nav.Link href="#features">Purchased History</Nav.Link>                    
                </Nav>
            </Navbar.Collapse>  
        </Navbar>                   
        </div>
    );
}

export default Subnav;

