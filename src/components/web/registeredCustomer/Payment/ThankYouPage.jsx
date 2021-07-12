import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Topimg from '../../../../assets/topimg31.jpg';

function ThankYouPage() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    const insidediv = {
        backgroundColor: 'rgb(0,0,0,0.8)',
    }
    return (
        <div style={contactImg}>                                     
            <Navigation></Navigation>             
            <Container align='left' style={insidediv} >
                
            </Container>                                                                                    
            <Footer></Footer>    
        </div>
    )
}

export default ThankYouPage
