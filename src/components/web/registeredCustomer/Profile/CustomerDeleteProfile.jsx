import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import DeleteForm from './CustomerDeleteProfileForm';
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function CustomerDeleteProfile() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
      //   backgroundSize: 'cover',  
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }
        
    return (
        <div className="col-md-12" style={contactImg}>  
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation>
            <br />
            <Container align="left"> 
                <DeleteForm></DeleteForm>
            </Container>
            <br /><br />
            <Footer></Footer>    
        </div>
    )
}

export default CustomerDeleteProfile
