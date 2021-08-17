import React from 'react';
import Form from './CustomerChangePasswordForm';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg31.jpg';
import axios from "axios";

function CustomerChangePassword() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        backgroundSize: 'cover',  
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"
    }

    const UpdateHandler=async(changePasswordData)=>{
        const currentPassword = changePasswordData.password        
        const accountID=localStorage.getItem('userAccID')

        // var md5 = require('md5'); 
        // const encryptpw = md5(currentPassword);
        // console.log(encryptpw)

        // try{
        //     let response = await axios.get(`http://localhost:8080/api/account/${accountID}`)
        //     console.log(response.data)
        //     console.log(response.data.password)

        //     if(encryptpw === response.data.password){
        //         console.log("password matched")
        //     }else{

        //     }

        //     if(response.status === 200){
        //         alert("Your profile has been successfully updated.")
        //     }else{
        //         alert("Your profile has not updated.")
        //     }
        // }catch (error) {
        //     console.log(error)
        // }
         
    }
    
    return (
        <div className="col-md-12" style={contactImg}>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation>
            <Container align="left"> 
                <Form UpdateHandler={UpdateHandler}></Form>
            </Container>
            <Footer></Footer>    
        </div>
    );
}

export default CustomerChangePassword;
