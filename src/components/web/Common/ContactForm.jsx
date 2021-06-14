import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import NavButtonStyle from "../../../css/web/common.module.css";
import FormStyle from "../../../css/web/Form.module.css";

ContactForm.propTypes = {};

function ContactForm(props) {
<<<<<<< HEAD:src/components/web/Common/ContactForm.jsx
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
                    <Form.Control style={{width: '260px'}}                             
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="xs" controlId="telephone">                    
                    <Form.Control style={{width: '260px'}}                     
                        type="text"
                        value={telephone}
                        placeholder="Telephone"
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </Form.Group>  

                <Form.Group size="xs" controlId="email">                    
                    <Form.Control style={{width: '260px'}}                    
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
                <Form.Group size="xs">
                    <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Submit</button></center><br />    
                </Form.Group>                
=======
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
      <Form className={FormStyle.innerbox} align="left">
        <center>
          <h2 style={{ marginTop: "20px" }}>CONTACT US</h2>
          <Form.Group size="xs" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ width: "260px" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="xs" controlId="telephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              style={{ width: "260px" }}
              type="tele"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="xs" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{ width: "260px" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="xs" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{ width: "260px" }}
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="xs" controlId="description">
            <center>
              <button
                block
                size="lg"
                type="submit"
                className={NavButtonStyle.btn}
              >
                Submit
              </button>
>>>>>>> 9ddd21e54f96ae4e1a573a0977954fe2e413fc53:src/components/web/customer/ContactForm.jsx
            </center>
            <br />
          </Form.Group>
        </center>
      </Form>
    </div>
  );
}

export default ContactForm;
