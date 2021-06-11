import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../assets/login9.jpg";
import PropTypes from 'prop-types';

Signup.propTypes = {
    
};

function Signup(props) {
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

export default Signup;