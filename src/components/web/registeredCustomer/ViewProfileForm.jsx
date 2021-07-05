import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../assets/avatar.png";
import FormStyle from "../../../css/web/Form.module.css";

function ViewProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const title={
        margin: '10px',
        padding: '5px',
    };

    const rowStyle={
        margin: '10px'
    };

    const textboxStyle = {
        width: '100%',
        border: 'solid 2px gray', 
        height: '40px',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px'            
    };

    return (                    
        <div>
             <Card style={{marginBottom: '0px', width: '25rem'}}>                        
                <Form style={{padding: '20px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h3 style={title}>Profile</h3></center>
                    </Row> 
                    <label style={{margin: '8px'}}>Name</label>                                     
                    <input type='text' style={textboxStyle}></input><br />
                    <label style={{margin: '8px'}}>Address</label><br />  
                    <input type='text' style={textboxStyle}></input><br />
                    <label style={{margin: '8px'}}>Contact No</label><br />    
                    <input type='text' style={textboxStyle}></input><br />                  
                    <label style={{margin: '8px'}}>Email</label><br />                              
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
