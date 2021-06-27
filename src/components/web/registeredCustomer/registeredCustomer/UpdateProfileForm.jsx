import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function UpdateProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("Asini");
    const [address, setAddress] = useState("Ambalangoda");
    const [telephone, setTelephone] = useState("0773153130");
    const [email, setEmail] = useState("asinipathmila@gmail.com");
    

    const formlabel = {
        color: "#FFF",
        paddig: "20px"
    }

    return (            
        <div>
             <Form className={FormStyle.innerbox}>
                <center>
                    <h2 style={{marginTop: '20px'}}>PROFILE</h2> 
                    <br />                   
                    <Form.Group size="xs" controlId="name" >                    
                        <input style={{width: '260px'}} className={FormStyle.textBox}                                            
                            type="text"                            
                            value={name}        
                            onChange={(e) => setName(e.target.value)}                                  
                        />
                    </Form.Group>

                    <Form.Group size="xs" controlId="address">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={address}        
                            onChange={(e) => setAddress(e.target.value)}                                                    
                        />
                    </Form.Group> 

                    <Form.Group size="xs" controlId="telephone">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={telephone}        
                            onChange={(e) => setTelephone(e.target.value)}                                                   
                        />
                    </Form.Group>  

                    <Form.Group size="xs" controlId="email">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}                   
                            type="email"                            
                            value={email}        
                            onChange={(e) => setEmail(e.target.value)}                                  
                        />
                    </Form.Group>    
                    <Form.Group size="xs">
                        <center>
                            <button block size="lg" type="submit" className={NavButtonStyle.btn}>Update</button>
                            <button block size="lg" type="submit" className={NavButtonStyle.btn}>Delete</button>
                        </center><br />    
                    </Form.Group>          
                </center>
            </Form>
        </div>
    )
}

export default UpdateProfileForm
