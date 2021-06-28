import React from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function ViewProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
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
                        <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                                            
                            type="text"                            
                            value={"Asini"}                                                     
                        />
                    </Form.Group>

                    <Form.Group size="xs" controlId="address">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={"Ambalangoda"}                                              
                        />
                    </Form.Group> 

                    <Form.Group size="xs" controlId="telephone">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                            type="text"                            
                            value={"0773153130"}                                                      
                        />
                    </Form.Group>  

                    <Form.Group size="xs" controlId="email">                    
                        <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}               
                            type="email"                            
                            value={"asinipathila@gmail.com"}                                                                                    
                        />
                    </Form.Group>    
                    <Form.Group size="xs">
                        <Link to='/updateProfile'>
                            <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Update</button></center><br />    
                        </Link>
                    </Form.Group>          
                </center>
            </Form>
        </div>
    )
}

export default ViewProfileForm
