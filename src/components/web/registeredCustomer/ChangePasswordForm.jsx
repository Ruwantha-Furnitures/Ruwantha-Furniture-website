import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../css/web/Login.css";
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from "../../../css/web/Form.module.css";

function ChangePasswordForm() {
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");        

    return (                    
        <div>                    
        <Form className={FormStyle.innerbox}>
        <center>
            <h2 style={{marginTop: '20px'}}>CHANGE PASSWORD</h2>   
            <br />                 
            <Form.Group size="sm" controlId="password">               
              <Form.Control className={FormStyle.passwordBox}  style={{width: '260px'}} 
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="newpassword">               
              <Form.Control className={FormStyle.passwordBox}  style={{width: '260px'}} 
                type="password"
                value={newpassword}
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="confirmpassword">               
              <Form.Control className={FormStyle.passwordBox}  style={{width: '260px'}}             
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="xs">
                <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Submit</button></center><br />    
            </Form.Group>                
        </center>
        </Form>
    </div>
    );
}

export default ChangePasswordForm;