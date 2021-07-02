import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../css/web/Login.css";
import FormStyle from "../../../css/web/Form.module.css";
import Button from 'react-bootstrap/Button';

function CustomerCheckoutDeteailsForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");        
      
    function validateForm() {
        //Put the correct validation 
    }
      
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (                    
        <div>                    
        <Form className={FormStyle.innerbox}>
        <center>
            <h2 style={{marginTop: '20px'}}>Checkout Details</h2>   
            <br />                 
                <Form.Group size="xs" controlId="name" >                    
                    <Form.Control style={{width: '260px'}} className={FormStyle.textBox}                            
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="xs" controlId="telephone">                    
                    <Form.Control style={{width: '260px'}}  className={FormStyle.textBox}                    
                        type="text"
                        value={telephone}
                        placeholder="Telephone"
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </Form.Group>  

                <Form.Group size="xs" controlId="email">                    
                    <Form.Control style={{width: '260px'}}  className={FormStyle.emailBox}                   
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="xs" controlId="description">                    
                    <Form.Control style={{width: '260px'}} className={FormStyle.textareastyle}
                        as="textarea" 
                        rows={3}
                        value={description}
                        placeholder="Message"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group size="xs">
                    <Button variant="success">Submit</Button>{' '}
                    <Button variant="danger">Cancel</Button>{' '}   
                </Form.Group>                
            </center>
            <br />
        </Form>
    </div>
  );
}

export default CustomerCheckoutDeteailsForm;
