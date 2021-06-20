import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "reactstrap";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";
import "../../../css/web/Signup.css";

export default function SignupForm() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

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

            <Form.Group size="sm" controlId="name">                
                <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                   
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>            

            <Form.Group size="sm" controlId="address">                
                <Form.Control style={{width: '260px'}} className={FormStyle.textBox} 
                    type="text"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="sm" controlId="telephone">                
                <Form.Control style={{width: '260px'}} className={FormStyle.textBox} 
                  type="tele"
                  value={telephone}
                  placeholder="Telephone"
                  onChange={(e) => setTelephone(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="sm" controlId="email">                
                <Form.Control style={{width: '260px'}} className={FormStyle.emailBox} 
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="sm" controlId="password">                
                <Form.Control style={{width: '260px'}} className={FormStyle.passwordBox} 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="sm" controlId="cpassword">                
                <Form.Control style={{width: '260px'}} className={FormStyle.passwordBox} 
                    type="password"
                    value={cpassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setCPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
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
                >
                    Sign Up
                </button>
                </center>
                <br />  
              </Form.Group>
          </Form>          
    </div>
  );
}
