import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import NavButtonStyle from "../../../css/web/common.module.css";
import '../../../css/web/Signup.css';

export default function SignupForm() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0; //Put the correct validation 
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const belowlinks = {
    color: "#FFF",
    paddig: "10px"
  }

  const formlabel = {
    color: "#FFF",
    paddig: "20px"
  }

  const loginform = {    
    justifyContent: "left",
    justifyItem: "left",
    margin: "10px",
    padding: "20px",
    backgroundColor: "rgb(41, 27, 27, 0.9)",        
    backgroundColor: "rgb(1,1,1, 0.8)",            
    borderRadius: "20px",                    
    color: "#FFF",

  }


  return (
    <div className="Login" >              
        <div class='row' style={loginform} >
            <Form onSubmit={handleSubmit} align="left">
                <center><h2>SIGN UP</h2></center><br />
                <Row>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="uname">
                            <Form.Label style={formlabel}>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={uname}
                                onChange={(e) => setUname(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Group size="sm" controlId="address">
                            <Form.Label style={formlabel}>Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="telephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control                    
                                type="tele"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </Form.Group>  
                    </Col>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control                    
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group size="sm" controlId="cpassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={cpassword}
                                onChange={(e) => setCPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={12}>
                        <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <center><Form.Check inline label=" I agree to the terms and conditions" name="group1" type={type} id={`inline-${type}-1`} /></center>
                            </div>
                        ))}
                        </Form>
                    </Col>
                </Row>
                <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Sign Up</button></center><br />
            </Form>
      </div>
    </div>
  );
}