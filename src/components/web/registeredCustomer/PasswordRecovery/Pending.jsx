import React from 'react';
import Form from "react-bootstrap/Form";
import "../../../../css/web/Login.css";
import Avatar from "../../../../assets/pendingemail.png";
import FormStyle from "../../../../css/web/Form.module.css";
import { Container} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import backcover from "../../../../assets/topimg38.jpg";
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";

function Pending() {
    const avatar = {
        width: '40%',
        height: '40%',
        borderRadius: '50%'
    }

    return (
        <div style={{              
            backgroundImage: `url(${backcover})`,        
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit:'cover',
            height: '100%',
            width: '100%',        
          }}>        
            <Navigation></Navigation>                    
            <div>
            <Container align='left'>                 
                <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
                    <Form style={{padding: '20px'}}>  
                        <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
                        <center><h3>We sent an email to your account.</h3></center>
                        <center><h6>Please login into your email account and click on the link we sent to reset your password.</h6></center>
                                                                                                                                            
                        <div align="center">
                        
                        </div> <br />     
                    </Form>
                </Card>
            </Container>        
            </div>     
            <br /><br />         
            <Footer></Footer>            
        </div>                    
    )
}

export default Pending
