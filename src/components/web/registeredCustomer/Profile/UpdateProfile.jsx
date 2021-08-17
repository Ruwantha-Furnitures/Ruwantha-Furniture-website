import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import ProfileForm from "./UpdateProfileForm";
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function UpdateProfile() {


    const [userDetails,setUserDetails] =useState();
    // require('dotenv').config();
    // let URI = { process.env.IP_ADDRESS };

    // useEffect(() => {
    //     let accountID=localStorage.getItem('userAccID');
    //     let accountEmail=localStorage.getItem('userEmail')
    //     console.log(accountID);
    //     const fecthData=async()=>{
    //         try {                
    //             let response=await axios.get(`http://192.168.56.1:3002/api/customer/viewprofile/${accountID}`)
    //             // let response=await axios.get(`${URI}:3002/api/customer/viewprofile/${accountID}`)
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

