import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import About from "../Common/About";
import ConForm from "../Common/ContactForm";
import { Container, Row, Col } from 'reactstrap';
import Topimg from '../../../assets/topimg2.jpg';

function CustomerContact() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }

    return (        
        <div className="col-md-12" style={contactImg}>                                     
            <Navigation></Navigation> 
            <Container align="right">
                <ConForm></ConForm>
            </Container>
            <Footer></Footer>            
        </div>                      
    );
}

export default CustomerContact;