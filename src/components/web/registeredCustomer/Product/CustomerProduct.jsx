import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import ProductBox  from "./CustomerAllProducts";
import Search from "../../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import SliderProducts from "../../Common/ProductSlider";
import axios from "axios";

const CustomerProduct = ({navigation}) => {
    const itemUpHandler = async (data) => {
      //console.log(data);
      try{
          await axios.get("http://192.168.56.1:3002/api/customer/item",{
          data,
        });
        console.log("Request successful");
      }catch (error){
        console.log(error);
      } 
    };
    

    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,              
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>  
        <Container fluid>
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>     
                    <Search></Search>               
                    {/* <Card.Img variant="top" src={Coverimg} />                     */}
                    <Card.Body>
                        <Container fluid align="center"> 
                            <br />
                            <SliderProducts></SliderProducts>                                                     
                            <ProductBox navigation={ navigation } itemUpHandler={ itemUpHandler }></ProductBox>
                        </Container>                        
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row> 
        </Container>                                       
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;

