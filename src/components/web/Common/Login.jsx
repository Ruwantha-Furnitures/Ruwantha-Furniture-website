import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Navigation from "../customer/Indexnav";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import backcover from "../../../assets/login9.jpg";
import "../../../css/web/Login.css";

function Login() {
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
            <Container align="left">                  
                <LoginForm></LoginForm>               
            </Container>              
            <Footer></Footer>
        </div> 
    );
}

export default Login;