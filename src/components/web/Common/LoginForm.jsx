import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../../../css/web/Login.css";
import Avatar from "../../../assets/avatar.png";
import FormStyle from "../../../css/web/Form.module.css";

const LoginForm = ({ navigation, loginHandler }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
      e.preventHandler();
      loginHandler({ email, password });
    };

    const avatar = {
        width: '40%',
        height: '40%',
        borderRadius: '50%'
    }

    const belowlinks = {
        color: "black",
        paddig: "10px"
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
        <div>                  
          <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px',margin: '10px'}} onSubmit={submitHandler}>  
            <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
            
              {/* <center><h2>Login</h2></center><br /> */}
                                                               
              <input  className={FormStyle.emailBox}
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              ></input><br />              
                         
              <input className={FormStyle.passwordBox}  
                type="password"                
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br /><br />
              <div align="center">
                <Button variant="success" type="submit" style={{width: '100%'}}>Login</Button>{' '}
              </div> <br />
              <center><Link to="/signup" style={belowlinks}>Don't have an account?</Link></center>
              <center><Link to='/recoveryPassword' style={belowlinks}>Forgot Password</Link></center>
            </Form>
          </Card>
        </div>
    );
}

export default LoginForm;