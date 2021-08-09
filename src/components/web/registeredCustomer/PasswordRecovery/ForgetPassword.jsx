import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/topimg33.jpg";
import "../../../../css/web/Login.css";
import FormRecovery from './PasswordRecoveryForm';
import { Redirect } from "react-router-dom";

function ForgotPassword() {
    const [isSubmit, setIsSubmit] = useState(false);
    
    const sendEmail  =async (data) =>{
        try{   
            console.log("Send request in password recovery.")         
            const res = await axios.post(`http://192.168.56.1:3002/api/forgetpassword/passwordRecovery/`,            
                { data }
            );               
            console.log(res.data.auth)     
            if(res.data.auth === true){
                setIsSubmit(true);
            }else{
                alert("Invalid Email Address.")
                setIsSubmit(false);                
            }     
            console.log("Request successful");       
        }catch(error){
            console.log(error);
        }
    }

    const contactImg = {
        backgroundImage: `url(${backcover})` ,
        backgroundSize: 'cover',  
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }

    const redirectHome = <Redirect to="/PendingEmail"></Redirect>
    return (  
        <React.Fragment>
            {isSubmit === true && (redirectHome)}
            {isSubmit === false && (                
                <div className="col-md-12" style={contactImg}>                                     
                    <Navigation></Navigation>                    
                    <Container align='left'>             
                        <FormRecovery sendEmail={sendEmail}></FormRecovery>            
                    </Container>     
                    <br /><br />         
                    <Footer></Footer>  
                </div>
            )}        
        </React.Fragment>    
    );
  
}

export default ForgotPassword;