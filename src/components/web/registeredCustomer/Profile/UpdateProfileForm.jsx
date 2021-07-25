import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import {Row} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FormStyle from "../../../../css/web/Form.module.css";
import Avatar from "../../../../assets/avatar.png";

function UpdateProfileForm({updateHandler}) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = () => {
        const userDetails ={name,address, telephone,email}
        updateHandler(userDetails)
    }

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
            <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h3 style={title}>Update Profile</h3></center>
                    </Row> 
                    <label style={{margin: '4px'}}><b>Name</b></label>                                     
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} style={textboxStyle}></input><br />
                    <label style={{margin: '4px'}}><b>Address</b></label><br />  
                    <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} style={textboxStyle}></input><br />
                    <label style={{margin: '4px'}}><b>Contact No</b></label><br />    
                    <input type='text' value={telephone} onChange={(e)=>setTelephone(e.target.value)} style={textboxStyle}></input><br />                  
                    <label style={{margin: '4px'}}><b>Email</b></label><br />                              
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} style={textboxStyle}></input><br />                               
                    <div align="right"><br />                                       
                        <Link to=''><Button variant="danger">Cancel</Button></Link>{' '}
                        <Button variant="success" onClick={submitHandler}>Update</Button>{' '}                     
                    </div>                                                     
                </Form>                                                          
            </Card>
        </div>
    )
}

export default UpdateProfileForm
