import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Navigation from "../js/indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/login13.jpg";
import "../css/Login.css"
class Login extends Component {
    render() {
    const backcontainer = {
        marginTop: "20px",
        backgroundColor: "#CAC1C1",
        padding: "30px",
        borderRadius: "20px",
        width: "40%",  
        marginBottom: "20px",
        justifyItems: "left",
        justifyContent: "left",
        marginLeft: "30px"

        
      };
      
    return (
        <div>        
            <Navigation></Navigation>    
            <div style={backcontainer}> 
                
            </div>        
            <Footer></Footer>
        </div>
    );
  }
}
 
export default Login;

