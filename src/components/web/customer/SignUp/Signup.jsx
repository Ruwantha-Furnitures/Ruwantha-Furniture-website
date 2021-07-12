import React from 'react';
import { Container } from 'reactstrap';
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../../assets/topimg27.jpg";
import CommonFormStyle from "../../../../css/web/common.module.css";
import axios from "axios";

const Signup = ({navigation}) => {
  const signUpHandler = async (data) => {
    //console.log(data);
    try{
        await axios.post("http://192.168.56.1:3002/api/customer/signup",{
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
            <div className={CommonFormStyle.formPageBox} align="left"> 
              <SignForm navigation={navigation} signUpHandler={signUpHandler} ></SignForm>   
            </div>                    
            <Footer></Footer>       
          </div>
    );
}

export default Signup;