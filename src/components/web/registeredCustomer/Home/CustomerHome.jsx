import React, {useState} from "react";
import { Container } from "reactstrap";
// import ProductBox from "../Product/CustomerAllProducts";
import ProductBox from "./CustomerProductCard";
import ConForm from "../../Common/CustomizeProduct";
import Topimg from '../../../../assets/topimg19.jpg';
import Navigation from "../Navigation/UserNav";
import Slideshow from "../../customer/Home/Banner";
import Footer from "../../Common/Footer";
import Card from 'react-bootstrap/Card';
import Gallary from '../../Common/ImageGallary';
import "../../../../css/web/Home.css";
import "../../../../css/web/common.module.css";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const CustomerHome = () => {
    require("bootstrap/dist/css/bootstrap.min.css");

    //connecting to the backend (send message details)
    const [isSubmit, setIsSubmit] = useState(false);
    
    const contactUsHandler =async (data) =>{
        try{            
            let response = await axios.post("http://localhost:8080/api/message/",data);
            console.log(response.data);
            if(response.status === 200){
                // alert("Send the message successfully.")
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
      MaxWidth: "100%", 
          
    };

    //console.log(localStorage.getItem("userlevel"))
    const redirectHome = <Redirect to="/customer_home" /> 
    return (
        <React.Fragment>
            {(isSubmit === true) && (redirectHome)}
            {(isSubmit === false) && (
                <div>
                    <Navigation></Navigation>
                    <Slideshow></Slideshow><br />
                    <Container fluid><Card>
                        <br/><Card.Title><center><h2>Furniture Items</h2></center></Card.Title><br />
                        <ProductBox></ProductBox> 
                        <div align="center">
                            <button class="btn btn-outline-secondary"><i class="bi bi-arrow-right-circle"></i> View All Furniture Items</button>                               
                        </div><br />
                    </Card></Container><br />
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

export default CustomerHome;
