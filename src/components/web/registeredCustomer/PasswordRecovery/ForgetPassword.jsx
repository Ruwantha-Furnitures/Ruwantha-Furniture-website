/* eslint-disable no-console */
import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Container } from 'reactstrap';
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/topimg33.jpg";
import "../../../../css/web/Login.css";
import FormRecovery from './PasswordRecoveryForm';

function ForgotPassword() {
    const [isSubmit, setIsSubmit] = useState(false);
    
    sendEmail  =async (data) =>{
        try{            
            const res = await axios.post(`http://192.168.56.1:3002/api/forgetpassword/passwordRecovery/`,            
                { data }
            );
        
            if(res.data.auth === true){
                setIsSubmit(true);
            }else{
                setIsSubmit(false);
            }            
        }catch(error){
            console.log(error);
        }
    }


    //     e.preventDefault();
    //     const { email } = this.state;
    // if (email === '') {
    //   this.setState({
    //     showError: false,
    //     messageFromServer: '',
    //     showNullError: true,
    //   });
    // } else {
    //   try {
    //     const response = await axios.post(
    //       'http://localhost:3003/forgotPassword',
    //       {
    //         email,
    //       },
    //     );
    //     console.log(response.data);
    //     if (response.data === 'recovery email sent') {
    //       this.setState({
    //         showError: false,
    //         messageFromServer: 'recovery email sent',
    //         showNullError: false,
    //       });
    //     }
    //   } catch (error) {
    //     console.error(error.response.data);
    //     if (error.response.data === 'email not in db') {
    //       this.setState({
    //         showError: true,
    //         messageFromServer: '',
    //         showNullError: false,
    //       });
    //     }
    //   }
    // }
  


    const contactImg = {
        backgroundImage: `url(${backcover})` ,
        backgroundSize: 'cover',  
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }

    return (
    <div>
        <div className="col-md-12" style={contactImg}>                                     
            <Navigation></Navigation>                    
            <Container align='left'>             
                <FormRecovery></FormRecovery>            
            </Container>     
            <br /><br />         
            <Footer></Footer>  
        </div>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
            {/* <LinkButtons
              buttonText="Register"
              buttonStyle={registerButton}
              link="/register"
            /> */}
            {/* <Link to="/signup" ><button className={NavButtonStyle.btn}>Sign Up</button></Link> */}
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}        
      </div>
    );
  
}

export default ForgotPassword;