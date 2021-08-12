import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../../assets/topimg27.jpg";
import { Container} from 'reactstrap';  
import axios from "axios";

const Signup = () => {  
  const [isSubmit, setIsSubmit] = useState(false);    
    
  const signUpHandler =async (data) =>{
    //console.log(data);
    try{
        const respond = await axios.post("http://localhost:8080/api/customer/",{data});
        console.log(respond.data)
        if(respond.data.auth === true){
          setIsSubmit(true);
        }else{
          setIsSubmit(false);
        }

      console.log("Request successful");

    }catch (error){
      console.log(error);
    } 
  };

  const redirectHome = <Redirect to="/login"></Redirect>
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
              <Container align='left'>        
                  <SignForm  signUpHandler={signUpHandler} ></SignForm>   
              </Container>                   
              <Footer></Footer>                   
            </div>
        )}
      </React.Fragment>
    );
}

export default Signup;