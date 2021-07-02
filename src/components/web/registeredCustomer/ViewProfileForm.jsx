import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function ViewProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");

    return (            
        <div>
             <Form className={FormStyle.innerbox} style={{margin: '40px'}}>
                <center>
                    <h2 style={{marginTop: '20px'}}>My Profile</h2> 
                    <br />                   
                                       
                    <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                                            
                        type="text"                            
                        value={"Asini"}                                                     
                    />                    
                                     
                    <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                        type="text"                            
                        value={"Ambalangoda"}                                              
                    />                    
                    
                    <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                        type="text"                            
                        value={"0773153130"}                                                      
                    />
                                        
                    <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}               
                        type="email"                            
                        value={"asinipathila@gmail.com"}                                                                                    
                    />
                    <br />                   
                    <Link to='/updateProfile'>
                        {/*<center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Update</button></center><br />*/}
                        {/*<Button variant="outline-success">Update</Button>*/}
                        <Button variant="success">Go to update page</Button>
                    </Link>                                     
                </center>
                <br />   
            </Form>
        </div>
    )
}

export default ViewProfileForm
