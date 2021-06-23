import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import About from "../Common/About";
import ConForm from "../Common/ContactForm";
import { Container, Row, Col } from 'reactstrap';
import Topimg from '../../../assets/topimg8.jpg';

function CustomerContact() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }

    return (        
        <div className="col-md-12">                                     
            <Navigation></Navigation> 
            <div style={contactImg}>
                <Container align="right">
                    <ConForm></ConForm>
                </Container>
            </div>            
            <Footer></Footer>            
        </div>                      
    );
}

export default CustomerContact;