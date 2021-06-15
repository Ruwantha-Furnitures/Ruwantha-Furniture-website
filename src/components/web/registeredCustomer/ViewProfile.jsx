import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import PropTypes from 'prop-types';

ViewProfile.propTypes = {
    
};

function ViewProfile(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const formlabel = {
        color: "#FFF",
        paddig: "20px"
    }

    const loginform = {    
        justifyContent: "left",
        justifyItem: "left",
        margin: "10px",
        padding: "40px",
        backgroundColor: "rgb(41, 27, 27, 0.9)",        
        backgroundColor: "rgb(1,1,1, 0.8)",            
        borderRadius: "20px",                    
        color: "#FFF"
    }
    return (
        <div>
             <Form style={loginform} onSubmit={handleSubmit} align="left">        
            <Form.Group size="sm" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control                
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="password">
              <Form.Label style={formlabel}>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>            
          </Form>
        </div>
    );
}

export default ViewProfile;