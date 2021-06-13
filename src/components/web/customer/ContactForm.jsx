import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from '../../../css/web/Form.module.css';

ContactForm.propTypes = {
    
};

function ContactForm(props) {
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
            <h2 style={{marginTop: '20px'}}>CONTACT US</h2>                    
                <Form.Group size="xs" controlId="name">
                    <Form.Label align="left">Name
                    <Form.Control style={{width: '260px'}}                             
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    /></Form.Label>
                </Form.Group>

                <Form.Group size="xs" controlId="telephone">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control style={{width: '260px'}}                     
                        type="tele"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </Form.Group>  

                <Form.Group size="xs" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control style={{width: '260px'}}                    
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="xs" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control style={{width: '260px'}} 
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="xs" controlId="description">
                    <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Submit</button></center><br />    
                </Form.Group>                
            </center>
            </Form>            
      </div>    
    );
}

export default ContactForm;