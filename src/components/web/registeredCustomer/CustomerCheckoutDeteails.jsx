import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import Form from './CustomerCheckoutDetailsForm';
import { Container, Row, Col } from 'reactstrap';


function CustomerCheckoutDeteails() {    

    return (
        <div>                                     
            <Navigation></Navigation>                    
            <Form></Form>            
            <Footer></Footer>    
        </div>
    );
}

export default CustomerCheckoutDeteails