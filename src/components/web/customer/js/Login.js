import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Navigation from "../js/indexnav";
import LoginForm from "../js/LoginForm";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/login9.jpg";
import "../css/Login.css"


class Login extends Component {
    render() {

    return (
      <div style={{              
        backgroundImage: `url(${backcover})`,        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit:'cover',
        height: '100%',
        width: '100%',        
      }}>        
            <Navigation></Navigation>                    
            <Container align="center">              
                <LoginForm></LoginForm>               
            </Container>              
            <Footer></Footer>
        </div>        
    );
  }
}
 
export default Login;

