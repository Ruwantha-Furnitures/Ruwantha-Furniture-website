import React from "react";
import { Container} from "reactstrap";
import ConForm from "../Common/CustomizeProduct";
import Topimg from '../../../assets/topimg19.jpg';
import ProductBox from "./AllProductCards"; /// Change this to /ProductCards
import Navigation from "./Indexnav";
import Slideshow from './Banner';
import Footer from "../Common/Footer";
import Card from 'react-bootstrap/Card';
import Gallary from '../Common/ImageGallary';
import "../../../css/web/Home.css";
import CommonFormStyle from "../../../css/web/common.module.css";

function Home() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` , 
    repeat: 'none',    
    MaxWidth: "100%"
  };

  return (
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
            <ConForm></ConForm>              
          </Container>   
          <br />     
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default Home;
