import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Navigation from "../js/indexnav";
import Footer from "../../Common/js/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../../assets/login9.jpg";
 
class Signup extends Component {
  render() {
    return (
      <div style={{              
        backgroundImage: `url(${backcover})`,        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit:'cover',
        height: '100%',
        width: '100%'    
      }}>
        <Navigation></Navigation>
        <Container align="center"> 
          <SignForm></SignForm>   
        </Container>                    
        <Footer></Footer>       
      </div>
    );
  }
}
 
export default Signup;

