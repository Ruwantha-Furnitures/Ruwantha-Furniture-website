import React, {useEffect} from 'react';
import { Row, Col } from 'reactstrap';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import ProductBox  from "./CustomerAllProducts";
import Search from "../../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import SliderProducts from "../../Common/ProductSlider";
// import axios from "axios";

const CustomerProduct = () => {
    require("bootstrap/dist/css/bootstrap.min.css");

    // const itemUpHandler = async () => {
    //   //console.log(data);
    //     try{
    //         let res = await axios.get("http://localhost:8080/api/product");
    //         console.log(res.data);
    //         console.log("Request successful");
    //     }catch (error){
    //         console.log(error);
    //     } 
    // };
    
    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,              
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>          
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>     
                    <Search></Search>               
                    <Card.Body>                        
                        <br />
                        <SliderProducts></SliderProducts>
                        <br />
                        {/* <center><ProductBox itemUpHandler={itemUpHandler}></ProductBox></center> */}
                        <center><ProductBox></ProductBox></center>
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row>                                              
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;

