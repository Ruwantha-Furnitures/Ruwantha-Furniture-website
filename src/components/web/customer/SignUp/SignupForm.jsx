import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormStyle from "../../../../css/web/Form.module.css";
import "../../../../css/web/Signup.css";

const SignupForm= ({ signUpHandler }) =>  {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => { 
      e.preventDefault();
    signUpHandler({ name, email, address, contactNo, password });
  };

  return (
      <div>      
        <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px',margin: '10px'}} onSubmit={submitHandler}>          
            <center>        
                <h2>Sign Up</h2>
            </center>            
                           
            <input  style={{width: '260px'}} className={FormStyle.textBox}                   
                name = "name"
                type="text"                    
                placeholder="Name"
                value= {name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
                                
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                name = "address"
                type="text"                    
                placeholder="Address"
                value= {address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <br />
                                  
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                name = "telephone"
                type="tele"       
                pattern="[0-9]{10}"         
                placeholder="Contact Number"
                value ={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
            />    
            <br />        
                   
            <input style={{width: '260px'}} className={FormStyle.emailBox} 
                name = "email"
                type="email"                
                placeholder="Email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
               
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                name = "password"
                type="password"                
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br />
           
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                name = "confirmPassword"
                type="password"  
                value ={confirmPassword}              
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <br />

            <center>
                {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">                    
                    <Form.Check style={{fontSize: "14px"}}
                        inline
                        label=" I agree to the terms and conditions"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        required
                    />                    
                </div>
                ))}
            </center>
            <center>                    
                {/*<button  type="submit" className={NavButtonStyle.btn}>Sign Up</button>*/}                
                <Button variant="danger" type="reset"> Cancel</Button>{' '}
                <Button variant="success" type="submit">Signup</Button>{' '}
            </center>                           
        </Form> 
        </Card>                       
    </div>
  );
}
export default SignupForm;