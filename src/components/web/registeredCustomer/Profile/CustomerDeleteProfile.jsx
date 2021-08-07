import React,{useState,useEffect} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container } from 'reactstrap';
import DeleteForm from './CustomerDeleteProfileForm';
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg29.jpg';
import axios from 'axios';

function CustomerDeleteProfile() {
    const [isSubmit, setIsSubmit] = useState(false);


    const submitHandler =async (data) =>{
        let accountID=localStorage.getItem('userAccID');
        try{            
            const res = await axios.delete(`http://192.168.56.1:3002/api/customer/delete/${accountID}`,            
                { data }
            );
        
            if(res.data.auth === true){
                setIsSubmit(true);
            }else{
                setIsSubmit(false);
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
                <DeleteForm submitHandler={submitHandler}></DeleteForm>
            </Container>
            <br /><br />
            <Footer></Footer>    
        </div>
    )
}

export default CustomerDeleteProfile
