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

    // useEffect(() => {
    //     let accountID=localStorage.getItem('userAccID');
    //     let accountEmail=localStorage.getItem('userEmail')
    //     console.log(accountID);
    //     const fecthData=async()=>{
    //         try {                
    //             let response=await axios.get(`http://192.168.8.210:3002/api/customer/viewprofile/${accountID}`)
    //             const {name,address, telephone}=response.data
    //             const userData={
    //                 accountEmail,
    //                 name,
    //                 address,
    //                 telephone,
    //             }
    //             setUserDetails(()=>userData)
    //             console.log(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fecthData()
    // },[])

    const updateHandler=(data)=>{

        const updateData=async()=>{
            let accountID=localStorage.getItem('userAccID');
            try {                
                let response=await axios.put(`http://192.168.56.1:3002/api/customer/updateprofile/${accountID}`,{data})
            } catch (error) {
                
            }
        }
        updateData()
        console.log(data)
    }

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
                <ProfileForm updateHandler={updateHandler}></ProfileForm>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default UpdateProfile;

