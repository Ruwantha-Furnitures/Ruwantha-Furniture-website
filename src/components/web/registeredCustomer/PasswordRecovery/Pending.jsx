import React from 'react';
import Form from "react-bootstrap/Form";
import "../../../../css/web/Login.css";
import Avatar from "../../../../assets/pwrecovery.png";
import NavButtonStyle from "../../../../css/web/common.module.css";
import FormStyle from "../../../../css/web/Form.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pending() {
    return (
        <div>
            <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px'}}>  
                <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
                <center><h3>We sent an email to your account.</h3></center>
                <center><h4>Please login into your email account and click on the link we sent to reset your password.</h4></center>
                          
                             
                                          
                <br /><br />
                <div align="center">
                  <Button variant="success" type="submit" style={{width: '100%'}}>Submit</Button>{' '}
                </div> <br />     
            </Form>
        </Card>
        </div>
    )
}

export default Pending
