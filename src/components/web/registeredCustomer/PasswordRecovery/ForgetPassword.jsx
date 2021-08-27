import React, { useState } from 'react';
import axios from 'axios';
import { Container,Row } from 'reactstrap';
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/topimg33.jpg";
import "../../../../css/web/Login.css";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../../assets/pwrecovery.png";
import FormStyle from "../../../../css/web/Form.module.css";

function ForgotPassword() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [email, setEmail] = useState("");
    
    const submitHandler  = async (e,email) =>{
        e.preventDefault();
        try{   
            console.log("Send request in password recovery.")   
            console.log(email)      
            const res = await axios.get(`http://localhost:8080/api/passwordRecovery/${email}`,                            
            );               
            console.log(res.data)     
            if(res.status === 200){
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

    const avatar = {
        width: '40%',
        height: '40%',
        borderRadius: '50%'
    }
    
    const redirectHome = <Redirect to="/PendingEmail"></Redirect>
    return (  
        <React.Fragment>
            {isSubmit === true && (redirectHome)}
            {isSubmit === false && (                
                <div className="col-md-12" style={contactImg}>                                     
                    <Navigation></Navigation>                    
                    <Container align='left'>             
                    <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
                        <Form style={{padding: '20px'}} onSubmit={submitHandler}>  
                            <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
                            <center><h3>Password Recovery</h3></center>                            
                            
                            <input  className={FormStyle.emailBox}
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            ></input>       
                        
                            <br /><br />
                            <div align="right">
                                <Button variant="success" type="submit" style={{width: '100%'}}>Submit</Button>{' '}
                            </div>
                        </Form>
                    </Card>
                    <br />
                    </Container>     
                    <br /><br />         
                    <Footer></Footer>  
                </div>
            )}        
        </React.Fragment>    
    );
  
}

export default ForgotPassword;