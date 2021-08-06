import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import ProfileForm from "./UpdateProfileForm";
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function UpdateProfile() {


    const [userDetails,setUserDetails] =useState()

    const updateHandler=(data)=>{

        const updateData=async()=>{
            let accountID=localStorage.getItem('userAccID');
            try {                
                let response=await axios.put(`http://192.168.56.1:3002/api/customer/updateprofile/${accountID}`,{data})
                if(response){
                    alert("Your profile has been successfully updated.")
                }
            } catch (error) {
                
            }
        }
        updateData()
        console.log(data)
    }

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
            <Container align="left"> 
                <ProfileForm updateHandler={updateHandler}></ProfileForm>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default UpdateProfile;

