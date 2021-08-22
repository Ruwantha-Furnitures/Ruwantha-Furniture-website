import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import ProfileForm from "./UpdateProfileForm";
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function UpdateProfile() {

    const [userDetails,setUserDetails] =useState(false);

    const updateHandler=(userDetails)=>{
        const updateData=async()=>{
            let customerID=localStorage.getItem('CustomerID');
            try {                
                let response = await axios.put(`http://localhost:8080/api/customer/${customerID}`,userDetails)
                console.log(response.data)
                if(response.status === 200){
                    alert("Your profile has been successfully updated.")
                }else{
                    alert("Your profile has not updated.")
                }
            } catch (error) {
                console.log(error)
            }
        }
        updateData()        
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

