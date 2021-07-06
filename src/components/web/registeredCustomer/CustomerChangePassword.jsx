import React from 'react';
import Form from './ChangePasswordForm';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from 'reactstrap';
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg2.jpg';

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
