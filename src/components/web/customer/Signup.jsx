import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../assets/login9.jpg";
import axios from "axios";

const Signup = ({navigation}) => {
  const signUpHandler = async (data) => {
    try{
        await axios.post("http://192.168.8.175:3000/api/customer/signup",{
        data,
      });
      console.log("Request successful");
    }catch (error){
      console.log(error);
    } 
  };
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
              <SignForm navigation={navigation} signUpHandler={signUpHandler} ></SignForm>   
            </Container>                    
            <Footer></Footer>       
          </div>
    );
}

export default Signup;