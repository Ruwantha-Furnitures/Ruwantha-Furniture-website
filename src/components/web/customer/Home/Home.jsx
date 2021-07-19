import React, { useState } from "react";
import { Container} from "reactstrap";
import ConForm from "../../Common/CustomizeProduct";
import Topimg from '../../../../assets/topimg19.jpg';
import ProductBox from "../Products/AllProductCards"; /// Change this to /ProductCards
import Navigation from "../Navigation/Indexnav";
import Slideshow from './Banner';
import Footer from "../../Common/Footer";
import Card from 'react-bootstrap/Card';
import Gallary from '../../Common/ImageGallary';
import "../../../../css/web/Home.css";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const Home = () => {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [isContactSubmit, setIsContactSubmit] = useState(false);
    
    const customizeHandler = async(data) =>{
        try{
            const response = await axios.post("http://192.168.56.1:3002/api/contactus/contact",
                {data}
            );
            if(response.data.auth == true){
                setIsContactSubmit(true);
            }else{
                setIsContactSubmit(false);
            }
        }catch(error){
            console.log(error);
        }
    }

    const contactImg = {
        backgroundImage: `url(${Topimg})` , 
        repeat: 'none',    
        MaxWidth: "100%"
    };

    const redirectHome = <Redirect to="/home" /> 
    return (
        <React.Fragment>
            {(isContactSubmit === true) && (redirectHome)}
            {(isContactSubmit === false) && (
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
                          <ConForm customizeHandler={customizeHandler}></ConForm>              
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