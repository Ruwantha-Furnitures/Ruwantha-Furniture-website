import React, {useState} from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import About from "../../Common/About";
import ConForm from "../../Common/ContactForm";
import { Container} from 'reactstrap';
import Topimg from '../../../../assets/topimg10.jpg';
import axios from "axios";
import { Redirect } from 'react-router-dom';

const CustomerContact = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    //console.log("test")
    const contactUsHandler =async (data) =>{
        try{            
            let response = await axios.post("http://localhost:8080/api/message/",data);
            console.log(response.data);
            if(response.status === 200){
                setIsSubmit(true)
            }else{
                setIsSubmit(false)
            }
        }catch (error) {
            if (error.response.status === 500) {
                console.log("There was a problem with the server: ", error);
            } else {
                console.log(error.response.data.msg);
            }
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
            {(isSubmit===true) && (redirectHome)}
            {(isSubmit===false) && (
                <div>                                     
                    <Navigation></Navigation> 
                    <About></About>
                    <div style={contactImg}>
                        <Container align="left">
                            <br />
                            <ConForm contactUsHandler={contactUsHandler}></ConForm>                            
                            <br />
                        </Container>
                    </div>            
                    <Footer></Footer>            
                </div>  
            )}           
        </React.Fragment>                        
    );
}

export default CustomerContact;