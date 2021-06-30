import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../../css/web/Login.css";
import Avatar from "../../../assets/avatar.png";
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from "../../../css/web/Form.module.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
          <Form style={loginform} align="left">
            <center><img src={Avatar} style={avatar}/></center><br />
            
              <input className={FormStyle.emailBox}               
                type="email"                
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
                         
              <input className={FormStyle.passwordBox}  
                type="password"                
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br /><br />
            
            <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Login</button></center><br />
            <center><Link to="/signup" style={belowlinks}>Don't have an account?</Link></center>
            <center><Link to='/recoveryPassword' style={belowlinks}>Forgot Password</Link></center>
          </Form>
        </div>
    );
}

export default LoginForm;