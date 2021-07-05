import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function UpdateProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("Asini");
    const [address, setAddress] = useState("Ambalangoda");
    const [telephone, setTelephone] = useState("0773153130");
    const [email, setEmail] = useState("asinipathmila@gmail.com");
    
    return (            
        <div>
            <Form className={FormStyle.innerbox} style={{margin: '40px'}}>
                <center>
                    <h2 style={{marginTop: '20px'}}>Update Profile</h2> 
                    <br />                                                           
                    <input style={{width: '260px'}} className={FormStyle.textBox}                                            
                        type="text"                                                    
                        onChange={(e) => setName(e.target.value)}  
                        required                                
                    />                    
                
                    <input style={{width: '260px'}}  className={FormStyle.textBox}                    
                        type="text"                                                    
                        onChange={(e) => setAddress(e.target.value)} 
                        required                                                   
                    />                
                    
                    <input style={{width: '260px'}}  className={FormStyle.textBox}                    
                        type="text"                                                
                        onChange={(e) => setTelephone(e.target.value)}  
                        required                                                 
                    />                    
            
                    <input style={{width: '260px'}}  className={FormStyle.emailBox}                   
                        type="email"                                                    
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                
                    />
                    <br /> 
                    <br />                
                    <center>
                        {/*<button block size="lg" type="submit" className={NavButtonStyle.btn}>Update</button>
                        <button block size="lg" type="submit" className={NavButtonStyle.btn}>Delete</button>*/}                        
                        <Button variant="danger">Cancel</Button>{' '}
                        <Button variant="success">Update</Button>{' '}
                    </center><br />                        
                </center>
            </Form>
        </div>
    )
}

export default UpdateProfileForm
