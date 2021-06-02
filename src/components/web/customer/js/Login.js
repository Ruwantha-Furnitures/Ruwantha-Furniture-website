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
      const formcontainer = {
        margin: "20px",
        padding: "10px",
        backgroundColor: "rgb(41, 27, 27, 0.9)",        
        backgroundColor: "rgb(1,1,1, 0.8)",            
        borderRadius: "20px",
        width: "30%",          
        justifyItems: "center",
        justifyContent: "center",        
        color: "#FFF",
        
        '@media (max-width: 500px)': {
          width: "100%",   
        },
      };
      
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
              <div align='center'>     
                <div style={formcontainer}>
                <div align='left'>   
                  <LoginForm></LoginForm>
                </div>
                </div>
            </div>        
            <Footer></Footer>
        </div>        
    );
  }
}
 
export default Login;

