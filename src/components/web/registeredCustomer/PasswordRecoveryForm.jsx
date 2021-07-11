import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../css/web/Login.css";
import Avatar from "../../../assets/pwrecovery.png";
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from "../../../css/web/Form.module.css";

function PasswordRecoveryForm() {
    const [email, setEmail] = useState("");    

    function handleSubmit(event) {
        event.preventDefault();
    }

    const avatar = {
        width: '40%',
        height: '40%',
        borderRadius: '50%'
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
            <center><img src={Avatar} style={avatar} alt='imgrecovery'/></center><br />
            <center><h6>Enter Your Email Address</h6></center><br />
            <Form.Group size="sm" controlId="email">                
              <Form.Control className={FormStyle.emailBox}               
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Submit</button></center><br />
          </Form>
        </div>
    );
}

export default PasswordRecoveryForm;
