import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import ProfileForm from "./UpdateProfileForm";
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';

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
            <Container align="left"> 
                <ProfileForm></ProfileForm>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default UpdateProfile;

