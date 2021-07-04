import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from 'reactstrap';
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg2.jpg';
import Form from './CustomerCheckoutDetailsForm';

function CustomerCheckoutDeteails() {    

    return (
        <div>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation>            
            <Form></Form>            
            <Footer></Footer>    
        </div>
    );
}

export default CustomerCheckoutDeteails
