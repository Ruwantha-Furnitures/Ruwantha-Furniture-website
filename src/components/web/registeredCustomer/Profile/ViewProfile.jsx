import React,{useEffect,useState} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container} from 'reactstrap';
import ProfileForm from "./ViewProfileForm";
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg28.jpg';
import axios from 'axios';

function ViewProfile() {

    const [userDetails,setUserDetails] =useState();
    // require('dotenv').config();
    // let URI = { process.env.IP_ADDRESS };

    useEffect(() => {
        let accountID=localStorage.getItem('userAccID');
        let accountEmail=localStorage.getItem('userEmail')
        console.log(accountID);
        const fecthData=async()=>{
            try {                
                let response=await axios.get(`http://192.168.56.1:3002/api/customer/viewprofile/${accountID}`)
                // let response=await axios.get(`${URI}:3002/api/customer/viewprofile/${accountID}`)
                const {name,address, telephone}=response.data
                const userData={
                    accountEmail,
                    name,
                    address,
                    telephone,
                }
                setUserDetails(()=>userData)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fecthData()
    },[])


    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    // const formStyle = {                       
    //     padding: '20px',
    //     margin: '20px',
    //     marginLeft: '40px',
    //     MaxWidth: "100%"     
    // }
    return (
        <div style={contactImg}>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation> 
            <Container align='left'>
                <ProfileForm userDetails={userDetails}></ProfileForm> 
            </Container>                                                                                    
            <Footer></Footer>    
        </div>
    );
}

export default ViewProfile;