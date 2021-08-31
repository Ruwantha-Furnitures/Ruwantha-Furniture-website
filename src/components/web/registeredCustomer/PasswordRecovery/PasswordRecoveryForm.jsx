import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { Row } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Avatar from "../../../../assets/pwchange.png";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import "../../../../css/web/Login.css";
import FormStyle from "../../../../css/web/Form.module.css";
import axios from "axios";


function PasswordRecoveryForm(props) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [isUpdate, setIsUpdate] = useState(false);
    // const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");     
    
    const queryParams = new URLSearchParams(window.location.search);
    
    const token = queryParams.get('token');
    console.log(token)

    const submitHandler = async(e) => {
        e.preventDefault();
        const changePasswordData = {newpassword,confirmpassword}

        console.log(changePasswordData.data)

        try{
            let TokenResponse = await axios.get(`http://localhost:8080/api/resetTokenByToken/${token}`)                    
            console.log(TokenResponse.data)
        }catch(error){
            console.log(error)
        }

        // try{

        //     if(newpassword === confirmpassword){
        //         console.log("New passwords are matched")
        //         var md5 = require('md5'); 
        //         const encryptnewpw = md5(newpassword);
        //         console.log(encryptnewpw)

        //         const NewPasswordData = {email:email,password:encryptnewpw}
        //         console.log(NewPasswordData)
                
        //         let NewPasswordResponse = await axios.put(`http://localhost:8080/api/email/${email}`,NewPasswordData)                    
        //         console.log(NewPasswordResponse.data)

        //         if(NewPasswordResponse.status === 200){
        //             alert("Your profile has been successfully updated.")
        //             setIsUpdate(true)
        //         }else{
        //             // alert("Your profile has not updated.")    
        //             setIsUpdate(false)            
        //         }

        //     }else{
        //         console.log("New passwords are not matched")
        //         alert("New passwords are not matched")
        //         setNewPassword("")
        //         setConfirmPassword("")
        //     }
        // }catch (error) {
        //     console.log(error)
        // }

        // UpdateHandler(changePasswordData)
    }
    
    const title={        
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    const redirectProfile = <Redirect to="/viewProfile"></Redirect>;
    return ( 
        <React.Fragment>
            {(isUpdate === true) && (redirectProfile)}   
            {(isUpdate === false) && (
                <div>   
                <br />                 
                <Card className={FormStyle.cardbox} style={{marginBottom: '30px', marginTop: '30px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
                    <Form style={{padding: '15px'}} onSubmit={submitHandler}>                
                        <Row style={rowStyle}>                                
                            <center><img src={Avatar} alt={Avatar} width={40} height={40}></img></center>
                            <center><h4 style={title}>Change Password</h4></center>
                        </Row>                 
                                    

                         <br />
                            <label><b><i style={{fontSize:'10px'}}>**Use at least one lowercase, uppercase and digit. Minimum length is 6 characters.</i></b></label>
                        <br />        
                                    
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
            )}              
        </React.Fragment>          
    );
}

export default PasswordRecoveryForm;