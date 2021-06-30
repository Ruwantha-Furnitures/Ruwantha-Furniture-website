import React from 'react';
import Form from "react-bootstrap/Form";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function About() {
    return (
        <div>
            <Container>
            <Row sm={12}>
                <Col sm={1}> 
                    <label style={{marginTop: '10px'}}>Category</label>
                </Col>
                <Col sm={3}>  
                <Form lassName={FormStyle.innerbox}>                    
                    <select className={FormStyle.dropBox} >
                        <option>Asini</option>
                        <option>Asini</option>
                    </select>
                </Form>                
                </Col>
            </Row>     
            </Container>  
        </div>
    );
}

export default About;