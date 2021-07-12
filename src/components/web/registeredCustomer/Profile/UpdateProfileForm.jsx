import React from 'react';
import Form from "react-bootstrap/Form";
import {Row} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FormStyle from "../../../../css/web/Form.module.css";
import Avatar from "../../../../assets/avatar.png";

function UpdateProfileForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    // const [name, setName] = useState("Asini");
    // const [address, setAddress] = useState("Ambalangoda");
    // const [telephone, setTelephone] = useState("0773153130");
    // const [email, setEmail] = useState("asinipathmila@gmail.com");

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
                        <center><h3 style={title}>Update Profile</h3></center>
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
                        <Link to=''><Button variant="danger">Cancel</Button></Link>{' '}
                        <Button variant="success">Update</Button>{' '}                     
                    </div>                                                     
                </Form>                                                          
            </Card>
        </div>
    )
}

export default UpdateProfileForm