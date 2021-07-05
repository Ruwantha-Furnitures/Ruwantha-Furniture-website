import React, {useState} from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col, CardImg } from 'reactstrap';
import ProfileForm from "../registeredCustomer/ViewProfileForm";
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg19.jpg';
import Card from 'react-bootstrap/Card';

function ViewProfile() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        padding: '0',
        marginBottom: '20px',
        MaxWidth: "100%"     
    }
    return (
        <div>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation>
            <Container>
            <Card style={contactImg}>                
                <Card.Body>
                <ProfileForm></ProfileForm>
                </Card.Body>
            </Card>  
            </Container>                                  
            <Footer></Footer>    
        </div>
    );
}

export default ViewProfile;