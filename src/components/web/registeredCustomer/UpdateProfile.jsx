import React, {useState} from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import { Container, Row, Col } from 'reactstrap';
import ProfileForm from "../registeredCustomer/UpdateProfileForm";
import Subnavigation from "./Subnav";
import Topimg from '../../../assets/topimg2.jpg';

function UpdateProfile() {
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
                <ProfileForm></ProfileForm>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default UpdateProfile;

