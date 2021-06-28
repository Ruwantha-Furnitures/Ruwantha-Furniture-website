import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../css/web/Login.css";
import Avatar from "../../../assets/pwrecovery.png";
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from "../../../css/web/Form.module.css";

function PasswordRecoveryForm() {
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
        backgroundColor: "rgb(1,1,1, 0.8)",            
        borderRadius: "20px",                    
        color: "#FFF"
    }

    return (
        <div className="Login" >        
          <Form style={loginform} onSubmit={handleSubmit} align="left">
            <center><img src={Avatar} style={avatar}/></center><br />
            <Form.Group size="sm" controlId="email">                
              <Form.Control className={FormStyle.emailBox}               
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="password">               
              <Form.Control className={FormStyle.passwordBox}  
                type="password"
                value={password}
                placeholder="Password"
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

export default PasswordRecoveryForm;
