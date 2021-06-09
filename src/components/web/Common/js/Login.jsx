import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Navigation from "../../customer/js/Indexnav";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import backcover from "../../../../assets/login9.jpg";
import "../css/Login.css"
import PropTypes from 'prop-types';

Login.propTypes = {
    
};

function Login(props) {
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

export default Login;