import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Avatar from "../../../assets/avatar.png";
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
    
    const title={
        margin: '10px',
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    const textboxStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',
        height: '40px',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px'            
    };

    return (                    
        <div>   
        <br />                 
        <Card className={FormStyle.cardbox} style={{marginBottom: '30px', marginTop: '30px', width: '24rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}}>                
                <Row style={rowStyle}>                                
                    <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                    <center><h3 style={title}>Change Password</h3></center>
                </Row>                 
                            
                <input  className={FormStyle.emailBox}
                    type='password'
                    placeholder='Enter your password'
                    onChange={(e) => setEmail(e.target.value)}
                ></input><br />              
                            
                <input className={FormStyle.passwordBox}  
                    type="password"                
                    placeholder="Enter your new password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input className={FormStyle.passwordBox}  
                    type="password"                
                    placeholder="Confirm password"
                    onChange={(e) => setPassword(e.target.value)}
                />
              
                <br /><br />
                <div align="right">
                    <Button variant="danger" type='reset'>Cancel</Button>{' '}
                    <Button variant="success" type='submit'>Update</Button>{' '}
                </div>
            </Form>
        </Card>
        <br />
    </div>
    );
}

export default ChangePasswordForm;