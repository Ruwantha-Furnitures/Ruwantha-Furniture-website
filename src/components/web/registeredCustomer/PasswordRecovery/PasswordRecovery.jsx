import React from 'react';
import { Container } from 'reactstrap';
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/login9.jpg";
import "../../../../css/web/Login.css";
import FormRecovery from './PasswordRecoveryForm';

function UpdateProfile() {
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
            <Container align="center">                  
                <FormRecovery></FormRecovery>            
            </Container>              
            <Footer></Footer>            
        </div>
    )
}

export default UpdateProfile
