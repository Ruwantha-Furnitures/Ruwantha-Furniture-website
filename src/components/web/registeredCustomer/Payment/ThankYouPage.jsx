import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Topimg from '../../../../assets/topimg32.jpg';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { Container } from 'reactstrap';

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
        height: '100%',
        width: '100%',
        color: 'white',
        padding: '70px',
        justifyItem: 'center',
        justifyContent: 'center',
        textAlign: 'center'        
    }
    return (
        <div style={contactImg}>                                     
            <Navigation></Navigation>             
            <Container align='left'>
                <Form style={insidediv}>
                    <p style={{fontSize: '8rem'}}>Thank You!</p>
                    <p style={{fontSize: '3rem'}}>Your Order ID: 45896588</p>
                    <Button variant="success">Go to Home Page</Button>{' '}    
                </Form>
            </Container>  
            <br />                                                                                  
            <Footer></Footer>    
        </div>
    )
}

export default ThankYouPage
