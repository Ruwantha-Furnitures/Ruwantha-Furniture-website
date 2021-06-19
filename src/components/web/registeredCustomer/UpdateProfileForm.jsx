import React from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function UpdateProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const formlabel = {
        color: "#FFF",
        paddig: "50px"
    }

    return (            
        /*<div style={{marginTop:'80px'}}>*/
        <div>
             <Form className={FormStyle.innerbox}>
                <center>
                    <h2 style={{marginTop: '20px'}}>PROFILE</h2> 
                    <br />                   
                    <Form.Group size="xs" controlId="name" >                    
                        <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                                            
                            type="text"                            
                            value={"Asini"}          
                            readOnly                    
                        />
                    </Form.Group>

                    <Form.Group size="xs" controlId="address">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={"Ambalangoda"}   
                            readOnly                       
                        />
                    </Form.Group> 

                    <Form.Group size="xs" controlId="telephone">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={"0773153130"}   
                            readOnly                         
                        />
                    </Form.Group>  

                    <Form.Group size="xs" controlId="email">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}                   
                            type="email"                            
                            value={"asinipathila@gmail.com"}    
                            readOnly                         
                        />
                    </Form.Group>
                   
                    <Form.Group size="xs">              
                        <Row>
                            <Col sm={6}>
                                <button className={NavButtonStyle.btn}>Update</button>
                            </Col>
                            <Col sm={6}>
                                <button className={NavButtonStyle.btn}>Delete</button>
                            </Col>
                        </Row>                   
                    </Form.Group>   
                
                </center>
            </Form>
        </div>
    )
}

export default UpdateProfileForm