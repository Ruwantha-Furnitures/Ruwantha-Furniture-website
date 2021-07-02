import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from 'reactstrap';
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg2.jpg';
import Form from './CustomerCheckoutDetailsForm';

function CustomerCheckoutDeteails() {    
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }
    return (
        <div className="col-md-12" style={contactImg}>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation>
            <Container align="center"> 
                <Form></Form>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default CustomerCheckoutDeteails
