import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import Avatar from "../../../../assets/avatar.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const avatar = {
      width: '40%',
      height: '40%',
      borderRadius: '50%'
  }

  const belowlinks = {
    color: "#FFF",
    paddig: "10px"
  }

  const formlabel = {
    color: "#FFF",
    paddig: "10px",
  }

  const loginform = {    
    justifyContent: "left",
    justifyItem: "left"
  }


  return (
    <div className="Login">        
      <Form style={loginform} onSubmit={handleSubmit}>
        <center><img src={Avatar} style={avatar}/></center><br />
        <Form.Group size="lg" controlId="email">
          <Form.Label style={formlabel}>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label style={formlabel}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <center><button block size="lg" type="submit" class='btn'>Login</button></center><br />
        <center><a href={"#"} style={belowlinks}>Don't have an account?</a></center>
        <center><a href={"#"} style={belowlinks}>Forgot Password</a></center>
      </Form>
    </div>
  );
}