import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

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
      
        const belowlinks = {
          color: "#FFF",
          paddig: "10px"
        }
      
        const formlabel = {
          color: "#FFF",
          paddig: "20px"
        }
      
        const loginform = {    
          justifyContent: "left",
          justifyItem: "left",
          margin: "0px",
          padding: "0px",
          backgroundColor: "rgb(41, 27, 27, 0.9)",        
          backgroundColor: "rgb(1,1,1, 0.8)",            
          borderRadius: "0px",                    
          color: "#FFF",
      
        }

    return (                    
        <div className="col-md-12" style={loginform}> 
            <Form onSubmit={handleSubmit} align="left">
                <h2 style={{marginTop: '20px'}}>CONTACT US</h2>
                <Row>
                    <Col sm={12}>
                        <Form.Group size="sm" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control  style={{width: '200px'}}                                
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>                
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Group size="sm" controlId="telephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control style={{width: '200px'}}                     
                                type="tele"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </Form.Group>  
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Group size="sm" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control style={{width: '200px'}}                    
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Group size="sm" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{width: '200px'}} 
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Col>                   
                </Row>
                <center><button block size="lg" type="submit" class='btn'>Submit</button></center><br />
            </Form>
      </div>    
    );
}

export default ContactForm;