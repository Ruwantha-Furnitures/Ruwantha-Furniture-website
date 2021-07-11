import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Row} from 'reactstrap';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../assets/avatar.png";
import FormStyle from "../../../css/web/Form.module.css";

function ViewProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
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
            <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
                <Form style={{padding: '15px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h3 style={title}>Profile</h3></center>
                    </Row> 
                    <label style={{margin: '4px'}}><b>Name</b></label>
                    <input type='text' style={textboxStyle}></input><br />
                    <label style={{margin: '4px'}}><b>Address</b></label><br />  
                    <input type='text' style={textboxStyle}></input><br />
                    <label style={{margin: '4px'}}><b>Contact No</b></label><br />    
                    <input type='text' style={textboxStyle}></input><br />                  
                    <label style={{margin: '4px'}}><b>Email</b></label><br />                              
                    <input type='text' style={textboxStyle}></input><br />                               
                    <div align="right"><br />
                    <Link to='/updateProfile'>                        
                        <Button variant="success">Go to update page</Button>
                    </Link>   
                    </div>                                                     
                </Form>
            </Card>                                                                                                  
        </div>
    )
}

export default ViewProfileForm
