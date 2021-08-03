import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Form from './CustomerPaymentForm';

function CustomerPayment() {    

    return (
        <div>                                     
            <Navigation></Navigation>                    
            <Form></Form>    
            <br /><br />      
            <Footer></Footer>    
        </div>
    );
}

export default CustomerPayment;
