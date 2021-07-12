import React from 'react';
import Form from './CustomerChangePasswordForm';
import Navigation from "./Navigation/UserNav";
import Footer from "../Common/Footer";
import { Container } from 'reactstrap';
import Subnavigation from "./Navigation/Subnav";
import Topimg from '../../../assets/topimg31.jpg';

function CustomerChangePassword() {
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
              <Container align="left"> 
                  <Form></Form>
              </Container>
              <Footer></Footer>    
          </div>
      );
}

export default CustomerChangePassword;
