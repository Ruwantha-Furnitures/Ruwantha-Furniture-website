import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";
import "../../../css/web/Signup.css";
import Button from 'react-bootstrap/Button';

const SignupForm= ({ signUpHandler }) =>  {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => { e.preventDefault()
    signUpHandler({ name, email, address, contactNo, password });
  };

  const loginform = {
    margin: "0px",
    padding: "20px",    
  };

  return (
      <div style={loginform}>                    
        <Form className={FormStyle.innerbox} onSubmit={submitHandler}>      
            <center>
                <br />
                <h2>SIGN UP</h2>
            </center>            
                           
            <input  style={{width: '260px'}} className={FormStyle.textBox}                   
                type="text"                    
                placeholder="Name"
                value= {name}
                onChange={(e) => setName(e.target.value)}
                required
            />
                                
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                type="text"                    
                placeholder="Address"
                value= {address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
                                  
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                type="tele"                
                placeholder="Telephone"
                value ={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
            />            
                   
            <input style={{width: '260px'}} className={FormStyle.emailBox} 
                type="email"                
                placeholder="Email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
               
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                type="password"                
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
           
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                type="password"  
                value ={confirmPassword}              
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />

            <center>
                {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">                    
                    <Form.Check style={{fontSize: "14px"}}
                        inline
                        label=" I agree to the terms and conditions"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />                    
                </div>
                ))}
            </center>
            <center>                    
                {/*<button  type="submit" className={NavButtonStyle.btn}>Sign Up</button>*/}                
                <Button variant="danger" type="reset">Cancel</Button>{' '}
                <Button variant="success" type="submit">Signup</Button>{' '}
            </center>
            <br />                
        </Form>          
    </div>
  );
}
export default SignupForm;