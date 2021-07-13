import React, { useState, useEffect } from "react";
import { Container } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../../assets/topimg27.jpg";
import CommonFormStyle from "../../../../css/web/common.module.css";
import axios from "axios";

const Signup = () => {  
  const [isSubmit, setIsSubmit] = useState(false);    
  const redirectHome = <Redirect to="/customer_home" />
  
  const signUpHandler =async (data) =>{
    //console.log(data);
    try{
        const respond = await axios.post("http://192.168.56.1:3002/api/customer/signup",{
        data,
      });
      if(respond.data.auth(true)){
        setIsSubmit(true);
      }else{
        setIsSubmit(false);
      }

      console.log("Request successful");

    }catch (error){
      console.log(error);
    } 
  };
    return (
      <React.Fragment>
        {isSubmit === true && (redirectHome)}
        {isSubmit === false && (
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
                <SignForm  signUpHandler={signUpHandler} ></SignForm>   
              </div>                    
              <Footer></Footer>                   
            </div>
        )}
      </React.Fragment>
    );
}

export default Signup;