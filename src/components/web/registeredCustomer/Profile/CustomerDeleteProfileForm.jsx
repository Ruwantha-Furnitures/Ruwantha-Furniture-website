import React,{useState,useEffect} from 'react';
import Form from "react-bootstrap/Form";
import {Row} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FormStyle from "../../../../css/web/Form.module.css";
import Avatar from "../../../../assets/avatar.png";
import axios from 'axios';

function CustomerDeleteProfileForm() {
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
        margin: '5px',
        border: 'solid 1px darkgray'        
    };

    return (
        <div>
            <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
                <Form style={{padding: '15px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h3 style={title}>Delete Profile</h3></center>                        
                    </Row> 
                    <center><h6>Do you really want to delete your account? You won't be able to get back into your account.</h6></center>
                    <label style={{margin: '4px'}}><b>Enter your password</b></label>                                     
                    <input type='password' style={textboxStyle} required></input><br />                    
                    <div align="right"><br />                                       
                        <Button variant="danger">Cancel</Button>{' '}
                        <Button variant="success">Delete</Button>{' '}                     
                    </div>                                                     
                </Form>                                                          
            </Card>
        </div>
    )
}

export default CustomerDeleteProfileForm
