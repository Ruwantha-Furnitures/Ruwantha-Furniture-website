import React, {useState} from 'react';
import Navigation from "./Indexnav";
import { Container, Row, Col } from 'reactstrap';
import Topimg from '../../../assets/topimg2.jpg';
import ConForm from "../Common/ContactForm";
import Footer from "../Common/Footer";

function Contact() {
    
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

export default Contact;