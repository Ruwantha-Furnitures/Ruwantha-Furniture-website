import React, {useState} from 'react';
import Navigation from "../Navigation/Indexnav";
import About from "../../Common/About";
import { Container} from 'reactstrap';
import Topimg from '../../../../assets/topimg10.jpg';
import ConForm from "../../Common/ContactForm";
import Footer from "../../Common/Footer";
import axios from "axios";
import { Redirect } from 'react-router-dom';

const Contact = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    console.log("test")
    const contactUsHandler =async (data) =>{
        try{            
            const respond = await axios.post("http://192.168.56.1:3002/api/customer/contact",
                { data }
            );
            console.log("asini")
            if(respond.data.auth === true){
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
        repeat: 'none',        
        MaxWidth: "100%"
    }

    const redirectHome = <Redirect to="/home" />
    return (    
        <React.Fragment>
        {isSubmit === true && (redirectHome)}
        {isSubmit === false && (
            <div>                                     
                <Navigation></Navigation> 
                <About></About>
                <div style={contactImg}>
                    <br />
                    <Container align="left">                         
                        <ConForm contactUsHandler={contactUsHandler}></ConForm>              
                    </Container>   
                    <br />     
                </div> 
                <Footer></Footer>            
            </div>
        )}          
        </React.Fragment>                                 
    );
}

export default Contact;