import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import DeleteForm from './CustomerDeleteProfileForm';
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg35.jpg';
import axios from 'axios';

function CustomerDeleteProfile() {
    const [isCustomerDelete, setIsCustomerDelete] = useState(false);    
    const [isAccountDelete, setAccountDelete] = useState(false);       
    const [isOnlineCustomerDelete, setonlineCustomerDelete] = useState(false);          

    const deleteProfileHandler =async () =>{
        let accountID=localStorage.getItem('userAccID');
        let CustomerID=localStorage.getItem('CustomerID');

        const onlineCustomerIDResponse = await axios.get(`http://localhost:8080/api/onlineCustomerLogin/${accountID}`)  
        console.log(onlineCustomerIDResponse.data.id)          
        
        let onlineCustomerID=onlineCustomerIDResponse.data.id;

        try{            
            const CustomerDeleteResponse = await axios.delete(`http://localhost:8080/api/customer/${CustomerID}`);
            console.log(CustomerDeleteResponse.data)
            if(CustomerDeleteResponse.status === 200){
                setIsCustomerDelete(true);
            }else{
                setIsCustomerDelete(false);
            }            
        }catch(error){
            console.log(error);
        }

        try{            
            const AccountDeleteResponse = await axios.delete(`http://localhost:8080/api/account/${accountID}`);
            console.log(AccountDeleteResponse.data)
            if(AccountDeleteResponse.status === 200){
                setAccountDelete(true);
            }else{
                setAccountDelete(false);
            }            
        }catch(error){
            console.log(error);
        }

        try{            
            const onlineCustomerDeleteResponse = await axios.delete(`http://localhost:8080/api/onlineCustomer/${onlineCustomerID}`);
            console.log(onlineCustomerDeleteResponse.data)
            if(onlineCustomerDeleteResponse.status === 200){
                setonlineCustomerDelete(true);
            }else{
                setonlineCustomerDelete(false);
            }            
        }catch(error){
            console.log(error);
        }

    };

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
                <DeleteForm deleteProfileHandler={deleteProfileHandler}></DeleteForm>
            </Container>
            <br /><br />
            <Footer></Footer>    
        </div>
    )
}

export default CustomerDeleteProfile
