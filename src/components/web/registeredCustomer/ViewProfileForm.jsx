import React from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function ViewProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const formlabel = {
        color: "#FFF",
        paddig: "20px"
    }

    const loginform = {    
        justifyContent: "left",
        justifyItem: "left",
        margin: "10px",
        padding: "40px",
        backgroundColor: "rgb(41, 27, 27, 0.9)",        
        backgroundColor: "rgb(1,1,1, 0.8)",            
        borderRadius: "20px",                    
        color: "#FFF"
    }
    return (            
        <div>
             <Form className={FormStyle.innerbox}>
                <center>
                    <h2 style={{marginTop: '20px'}}>PROFILE</h2>                    
                    <Form.Group size="xs" controlId="name" >                    
                        <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                            
                            type="text"                            
                            placeholder="Name"                            
                        />
                    </Form.Group>

                    <Form.Group size="xs" controlId="telephone">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            placeholder="Telephone"                            
                        />
                    </Form.Group>  

                    <Form.Group size="xs" controlId="email">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}                   
                            type="email"                            
                            placeholder="Email"                            
                        />
                    </Form.Group>    
                    <Form.Group size="xs">
                        <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Update</button></center><br />    
                    </Form.Group>          
                </center>
            </Form>
        </div>
    )
}

export default ViewProfileForm
