import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "reactstrap";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";
import "../../../css/web/Signup.css";

const SignupForm= ({ signUpHandler }) =>  {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {
    signUpHandler({ name, email, address, contactNo, password });
  };

  const loginform = {
    margin: "0px",
    padding: "30px",    
  };

  return (
      <div style={loginform}>                    
        <Form className={FormStyle.innerbox}>      
            <center>
                <br />
                <h2>SIGN UP</h2>
            </center>            
                           
            <input style={{width: '260px'}} className={FormStyle.textBox}                   
                type="text"                    
                placeholder="Name"
                onChangeText={(name) => setName(name)}
                required
            />
                                
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                type="text"                    
                placeholder="Address"
                onChangeText={(address) => setAddress(address)}
                required
            />
                                  
            <input style={{width: '260px'}} className={FormStyle.textBox} 
                type="tele"
                value={contactNo}
                placeholder="Telephone"
                onChangeText={(contact) => setContactNo(contact)}
                required
            />            
                   
            <input style={{width: '260px'}} className={FormStyle.emailBox} 
                type="email"
                value={email}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                required
            />
               
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                type="password"
                value={password}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                required
            />
           
            <input style={{width: '260px'}} className={FormStyle.passwordBox} 
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                required
            />

            <center>
                {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">                    
                    <Form.Check
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
                <button
                    block
                    size="lg"
                    type="submit"
                    className={NavButtonStyle.btn}
                    onPress={submitHandler}
                >
                    Sign Up
                </button>
                </center>
                <br />                
          </Form>          
    </div>
  );
}
export default SignupForm;