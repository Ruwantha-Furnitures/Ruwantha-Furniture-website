import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../assets/contact.png";
import FormStyle from "../../../css/web/Form.module.css";

const ContactForm = ({messageHandler}) => {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");       

    const submitHandler = (e) =>{
        e.preventDefault();
        messageHandler({name,email,telephone,description});
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
        margin: '5px',
        border: 'solid 1px darkgray'         
    };

    const textareaStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',        
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'            
    };
    
    return (                    
        <div>                    
        {/*<Form className={FormStyle.innerbox}>*/}
        <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}} onSubmit={submitHandler}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h4 style={title}>Contact Us</h4></center>
                    </Row>                                                         
                    <input style={textboxStyle} 
                        type='text'
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    ></input><br />                                           
                    <input style={textboxStyle} 
                        type='tel' 
                        placeholder="Contact Number"
                        value={telephone}
                        onChange={(e)=> setTelephone(e.target.value)}
                        required
                    ></input><br />                                                                  
                    <input style={textboxStyle} 
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    ></input><br />                           
                    <textarea style={textareaStyle} 
                        rows={5} 
                        cols={5} 
                        placeholder='Message'
                        value={description}    
                        onChange={(e)=>setDescription(e.target.value)}
                        required
                    ></textarea><br />                          
                    <div align="right"><br />                                       
                        <Button variant="danger" type='reset'>Cancel</Button>{' '}
                        <Button variant="success">Submit</Button>{' '}                     
                    </div>                                                     
                </Form>    
            </Card>
    </div>
    );
}

export default ContactForm;
