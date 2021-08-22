import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import ProfileForm from "./UpdateProfileForm";
import Subnavigation from "../Navigation/Subnav";
import { Redirect } from 'react-router-dom';
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function UpdateProfile() {

    const [userDetails,setUserDetails] =useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const updateHandler=(userDetails)=>{
        const updateData=async()=>{
            let customerID=localStorage.getItem('CustomerID');
            try {                
                let response = await axios.put(`http://localhost:8080/api/customer/${customerID}`,userDetails)
                console.log(response.data)
                if(response.status === 200){
                    alert("Your profile has been successfully updated.")
                    setIsSubmit(true)
                }else{
                    alert("Your profile has not updated.")
                    setIsSubmit(false)
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
    const redirectViewProfile = <Redirect to="/viewProfile"></Redirect>;  
    return (
        <React.Fragment>
             {(isSubmit === true) && (redirectViewProfile)}
            {(isSubmit === false) && (
                <div className="col-md-12" style={contactImg}>  
                    <Navigation></Navigation> 
                    <Subnavigation></Subnavigation>
                    <Container align="left"> 
                        <ProfileForm updateHandler={updateHandler}></ProfileForm>
                    </Container>
                    <Footer></Footer>    
                </div>
            )}
        </React.Fragment>        
    );
}

export default UpdateProfile;

