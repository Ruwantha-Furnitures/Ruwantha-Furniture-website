import React from 'react';
import Navigation from "./Navigation/UserNav";
import Footer from "../Common/Footer";
import { Container} from 'reactstrap';
import ProfileForm from "../registeredCustomer/ViewProfileForm";
import Subnavigation from "./Navigation/Subnav";
import Topimg from '../../../assets/topimg28.jpg';

function ViewProfile() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    // const formStyle = {                       
    //     padding: '20px',
    //     margin: '20px',
    //     marginLeft: '40px',
    //     MaxWidth: "100%"     
    // }
    return (
        <div style={contactImg}>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation> 
            <Container align='left'>
                <ProfileForm></ProfileForm> 
            </Container>                                                                                    
            <Footer></Footer>    
        </div>
    );
}

export default ViewProfile;