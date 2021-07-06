import React, {useState} from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col, CardImg } from 'reactstrap';
import ProfileForm from "../registeredCustomer/ViewProfileForm";
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg28.jpg';
import Card from 'react-bootstrap/Card';

function ViewProfile() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    const formStyle = {                       
        padding: '20px',
        margin: '20px',
        marginLeft: '40px',
        MaxWidth: "100%"     
    }
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