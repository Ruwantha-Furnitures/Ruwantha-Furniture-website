import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import Form from "react-bootstrap/Form";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";
import ProductBox from "./CustomerAllProducts";

function CustomerProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const contactImg = {        
        MaxWidth: "100%"
    }
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>  
        <Container>
            <Row sm={12}>
                <Col sm={1}> 
                    <label style={{marginTop: '10px'}}>Category</label>
                </Col>
                <Col sm={3}>  
                <Form lassName={FormStyle.innerbox}>                    
                    <select className={FormStyle.dropBox} >
                        <option>Asini</option>
                        <option>Asini</option>
                    </select>
                </Form>                
                </Col>
            </Row>     
        </Container>       
        <Container fluid align="center"> 
            <ProductBox></ProductBox>
        </Container>
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;
