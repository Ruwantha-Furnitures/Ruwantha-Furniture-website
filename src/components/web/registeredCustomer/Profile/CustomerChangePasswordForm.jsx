import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { Row } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Avatar from "../../../../assets/pwchange.png";
import "../../../../css/web/Login.css";
import FormStyle from "../../../../css/web/Form.module.css";
import axios from "axios";


function CustomerChangePasswordForm({UpdateHandler}) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");      

    const submitHandler = async(e) => {
        e.preventDefault();
        const changePasswordData = {password,newpassword,confirmpassword}

        // const currentPassword = changePasswordData.password        
        const accountID=localStorage.getItem('userAccID')

        var md5 = require('md5'); 
        const encryptpw = md5(password);
        console.log(encryptpw)

        try{
            let response = await axios.get(`http://localhost:8080/api/account/${accountID}`)
            console.log(response.data)
            console.log(response.data.password)

            if(encryptpw === response.data.password){
                console.log("Current password is matched")
                if(newpassword === confirmpassword){
                    console.log("New passwords are matched")
                }else{
                    console.log("New passwords are not matched")
                }
            }else{
                alert("Current password is not matched")
                setPassword("")
            }

            // if(response.status === 200){
            //     alert("Your profile has been successfully updated.")
            // }else{
            //     alert("Your profile has not updated.")                
            // }
        }catch (error) {
            console.log(error)
        }

        UpdateHandler(changePasswordData)
    }
    
    const title={        
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    return (                    
        <div>   
        <br />                 
        <Card className={FormStyle.cardbox} style={{marginBottom: '30px', marginTop: '30px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}} onSubmit={submitHandler}>                
                <Row style={rowStyle}>                                
                    <center><img src={Avatar} alt={Avatar} width={40} height={40}></img></center>
                    <center><h4 style={title}>Change Password</h4></center>
                </Row>                 
                            
                <input  className={FormStyle.emailBox}
                    type='password'
                    value={password}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input><br />              
                            
                <input className={FormStyle.passwordBox}  
                    type="password"    
                    value={newpassword}  
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"          
                    placeholder="Enter your new password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                <input className={FormStyle.passwordBox}  
                    type="password"        
                    value={confirmpassword}  
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"      
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
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

export default CustomerChangePasswordForm;