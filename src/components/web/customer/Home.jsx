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


function Home() {
  require("bootstrap/dist/css/bootstrap.min.css");
  const contactImg = {
    backgroundImage: `url(${Topimg})` , 
    repeat: 'none',
    padding: '15px',
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
      <div>
        <Card style={contactImg}>               
          <Container align="left">
            <ConForm></ConForm>  
          </Container>          
        </Card>        
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default Home;
