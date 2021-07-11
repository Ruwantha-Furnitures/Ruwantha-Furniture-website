import React from "react";
import { Container } from "reactstrap";
import ProductBox from "../registeredCustomer/CustomerAllProducts";
import ConForm from "../Common/CustomizeProduct";
import Topimg from '../../../assets/topimg19.jpg';
import Navigation from "./UserNav";
import Slideshow from "../customer/Banner";
import Footer from "../Common/Footer";
import Card from 'react-bootstrap/Card';
import Gallary from '../Common/ImageGallary';
import "../../../css/web/Home.css";
import "../../../css/web/common.module.css";
import CommonFormStyle from "../../../css/web/common.module.css";

function CustomerHome() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` ,
    repeat: 'none',        
    MaxWidth: "100%", 
    padding: '10px'   
  };

  //console.log(localStorage.getItem("userlevel"))

  return (
    <div>
      <Navigation></Navigation>
      <Slideshow></Slideshow><br />
      <Container fluid><Card>
          <br/><Card.Title><center><h2>Furniture Items</h2></center></Card.Title><br />
          <ProductBox></ProductBox> 
      </Card></Container><br />
      <Container fluid><Gallary></Gallary></Container>      
      <div style={contactImg}>
          <div className={CommonFormStyle.formPageBox} align="left">                         
            <ConForm></ConForm>              
          </div>        
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default CustomerHome;
