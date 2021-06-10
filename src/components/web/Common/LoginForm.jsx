import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../css/web/Login.css";
import Avatar from "../../../assets/avatar.png";
import NavButtonStyle from "../../../css/web/common.module.css";
import PropTypes from 'prop-types';

LoginForm.propTypes = {
    
};

function LoginForm(props) {
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
        paddig: "20px"
    }

    const loginform = {    
        justifyContent: "left",
        justifyItem: "left",
        margin: "10px",
        padding: "40px",
        backgroundColor: "rgb(41, 27, 27, 0.9)",        
        backgroundColor: "rgb(1,1,1, 0.8)",            
        borderRadius: "20px",                    
        color: "#FFF"
    }

    return (
        <div className="Login" >        
          <Form style={loginform} onSubmit={handleSubmit} align="left">
            <center><img src={Avatar} style={avatar}/></center><br />
            <Form.Group size="sm" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="password">
              <Form.Label style={formlabel}>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Login</button></center><br />
            <center><a href={"#"} style={belowlinks}>Don't have an account?</a></center>
            <center><a href={"#"} style={belowlinks}>Forgot Password</a></center>
          </Form>
        </div>
    );
}

export default LoginForm;