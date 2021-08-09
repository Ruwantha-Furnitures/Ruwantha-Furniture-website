import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../../css/web/Login.css";
import Avatar from "../../../../assets/pwrecovery.png";
import FormStyle from "../../../../css/web/Form.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PasswordRecoveryForm  = ({sendEmail}) => {
    const [email, setEmail] = useState("");   
    
    const submitHandler = () => {        
        const data = { email };
        // console.log(data);
        sendEmail(data);
      };
  
    const avatar = {
        width: '40%',
        height: '40%',
        borderRadius: '50%'
    }
    return (
        <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px'}} onSubmit={submitHandler}>  
                <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
                <center><h3>Password Recovery</h3></center>
                          
                <input  className={FormStyle.emailBox}
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>              
                                          
                <br /><br />
                <div align="center">
                  <Button variant="success" type="submit" style={{width: '100%'}}>Submit</Button>{' '}
                </div> <br />     
            </Form>
        </Card>
    );
}

export default PasswordRecoveryForm;
