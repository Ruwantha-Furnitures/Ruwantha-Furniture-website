import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";

function ThankYouPage() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    return (
        <div style={contactImg}>                                     
            <Navigation></Navigation>             
            <Container align='left'>
                
            </Container>                                                                                    
            <Footer></Footer>    
        </div>
    )
}

export default ThankYouPage
