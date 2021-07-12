import React from 'react';
import Navigation from "../Navigation/Indexnav";
import About from "../../Common/About";
import { Container} from 'reactstrap';
import Topimg from '../../../../assets/topimg10.jpg';
import ConForm from "../../Common/ContactForm";
import Footer from "../../Common/Footer";

function Contact() {
    
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',        
        MaxWidth: "100%"
    }
    return (                            
        <div>                                     
            <Navigation></Navigation> 
            <About></About>
            <div style={contactImg}>
                <br />
                <Container align="left">                         
                    <ConForm></ConForm>              
                </Container>   
                <br />     
            </div> 
            <Footer></Footer>            
        </div>                   
    );
}

export default Contact;