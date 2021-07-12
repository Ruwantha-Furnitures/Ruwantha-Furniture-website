import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import About from "../../Common/About";
import ConForm from "../../Common/ContactForm";
import { Container} from 'reactstrap';
import Topimg from '../../../../assets/topimg10.jpg';

function CustomerContact() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        padding: '35px',
        MaxWidth: "100%"
    }

    return (        
        <div>                                     
            <Navigation></Navigation> 
            <About></About>
            <div style={contactImg}>
                <Container align="left">
                    <ConForm></ConForm>
                </Container>
            </div>            
            <Footer></Footer>            
        </div>                      
    );
}

export default CustomerContact;