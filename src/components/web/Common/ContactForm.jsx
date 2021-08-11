import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../assets/contact.png";
import FormStyle from "../../../css/web/Form.module.css";
import axios from "axios";

const ContactForm = ({contactUsHandler}) => {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [contact_number, setTelephone] = useState("");
    const [details, setDescription] = useState("");       

    const submitHandler = async(e) => {       
        e.preventDefault();
        const data = { first_name, last_name, contact_number, email, details };
        try{            
            let response = await axios.post("http://localhost:8080/api/message/",{ data });
            console.log(response.data);
        }catch (error) {
            if (error.response.status === 500) {
                console.log("There was a problem with the server: ", error);
            } else {
                console.log(error.response.data.msg);
            }
        }

        // console.log(data);
        // contactUsHandler(data);        
      };
    
      const title={   
        margin: '2px',     
        padding: '3px'        
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
                        placeholder="Your First Name"
                        value={first_name}
                        onChange={(e) => setFName(e.target.value)}
                        required
                    ></input><br />  

                    <input style={textboxStyle} 
                        type='text'
                        placeholder="Your Last Name"
                        value={last_name}
                        onChange={(e) => setLName(e.target.value)}
                        required
                    ></input><br /> 

                    <input style={textboxStyle} 
                        type='tel' 
                        placeholder="Contact Number"
                        value={contact_number}
                        pattern="[0-9]{10}"  
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
                        value={details}    
                        onChange={(e)=>setDescription(e.target.value)}
                        required
                    ></textarea><br />       
                                       
                    <div align="right"><br />                                       
                        <Button variant="danger" type='reset'>Cancel</Button>{' '}
                        <Button variant="success" type='submit'>Submit</Button>{' '}                     
                    </div>                                                     
                </Form>    
            </Card>
    </div>
    );
}

export default ContactForm;
