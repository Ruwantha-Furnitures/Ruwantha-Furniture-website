import React, { useState } from "react";
import { Container} from "reactstrap";
import ConForm from "../../Common/CustomizeProduct";
import Topimg from '../../../../assets/topimg19.jpg';
import ProductBox from "./ProductCards"; /// Change this to /ProductCards
import Navigation from "../Navigation/Indexnav";
import Slideshow from './Banner';
import Footer from "../../Common/FooterunRegistered";
import Card from 'react-bootstrap/Card';
import Gallary from '../../Common/ImageGallary';
import "../../../../css/web/Home.css";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const Home = () => {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [isSubmit, setIsSubmit] = useState(false);
    
    const contactUsHandler =async (data) =>{
        try{            
            let response = await axios.post('http://localhost:8080/api/message',data);
            console.log(response.data);
        }catch (error) {
            if (error.response.status === 200) {                
                setIsSubmit(true);
            }if (error.response.status === 500) {
                console.log("There was a problem with the server: ", error);
                setIsSubmit(false);
            } else {
                console.log(error.response.data.msg);
                setIsSubmit(false);
            }
        }
    };

    const contactImg = {
        backgroundImage: `url(${Topimg})` , 
        repeat: 'none',    
        MaxWidth: "100%"
    };

    const redirectHome = <Redirect to="/home" /> 
    return (
        <React.Fragment>
            {(isSubmit === true) && (redirectHome)}
            {(isSubmit === false) && (
                <div>
                    <Navigation></Navigation>
                    <Slideshow></Slideshow>
                    <br/>
                    <Container fluid><Card>
                        <br/><Card.Title><center><h2>Furniture Items</h2></center></Card.Title><br />
                        <ProductBox></ProductBox> 
                    </Card></Container> 
                    <br />        
                    <Container fluid><Gallary></Gallary></Container>      
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

export default Home;