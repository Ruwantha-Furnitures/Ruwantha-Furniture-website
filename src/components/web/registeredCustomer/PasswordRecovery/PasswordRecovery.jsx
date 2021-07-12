import React from 'react';
import { Container } from 'reactstrap';
import Navigation from "../../customer/Navigation/Indexnav";
import Footer from "../../Common/Footer";
import backcover from "../../../../assets/topimg33.jpg";
import "../../../../css/web/Login.css";
import FormRecovery from './PasswordRecoveryForm';
import CommonFormStyle from "../../../../css/web/common.module.css";

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
            <div className={CommonFormStyle.formPageBox} align="left">                 
                <FormRecovery></FormRecovery>            
            </div>     
            <br /><br />         
            <Footer></Footer>            
        </div>
    )
}

export default UpdateProfile
