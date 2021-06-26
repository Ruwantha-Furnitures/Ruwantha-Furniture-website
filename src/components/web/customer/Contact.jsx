import React, {useState} from 'react';
import Navigation from "./Indexnav";
import About from "../Common/About";
import { Container, Row, Col } from 'reactstrap';
import Topimg from '../../../assets/topimg10.jpg';
import ConForm from "../Common/ContactForm";
import Footer from "../Common/Footer";

function Contact() {
    
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

export default Contact;