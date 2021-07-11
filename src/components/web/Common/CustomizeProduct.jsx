import React from "react";
import Form from "react-bootstrap/Form";
import {Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Avatar from "../../../assets/avatar.png";
import FormStyle from "../../../css/web/Form.module.css";


function CustomizeProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [telephone, setTelephone] = useState("");
    // const [description, setDescription] = useState("");   
    
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
        margin: '5px'            
    };

    const textareaStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',        
        borderRadius: '5px',
        padding: '5px',
        margin: '5px'            
    };
      
      
    // function validateForm() {
    //     //Put the correct validation 
    // }
      
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    
    return (                    
        <div>                    
        {/*<Form className={FormStyle.innerbox}>*/}
        <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={30} height={30}></img></center>
                        <center><h4 style={title}>Customize Furniture</h4></center>
                    </Row>                                                         
                    <input type='text' style={textboxStyle} placeholder="Your Name"></input><br />                                           
                    <input type='text' style={textboxStyle} placeholder="Contact No"></input><br />                                                                  
                    <input type='text' style={textboxStyle} placeholder='Email'></input><br />                           
                    <textarea rows={5} cols={5} style={textareaStyle} placeholder='Message'></textarea><br />                          
                    <div align="right"><br />                                       
                        <Button variant="danger" type='reset'>Cancel</Button>{' '}
                        <Button variant="success">Submit</Button>{' '}                     
                    </div>                                                     
                </Form>    
            </Card>
    </div>
  );
}

export default CustomizeProduct;
