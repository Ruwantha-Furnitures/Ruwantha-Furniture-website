import React , {  useState } from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Button from 'react-bootstrap/Button';
import Rating from './StarRating';
import Subnavigation from "../Navigation/Subnav";
import Form from "react-bootstrap/Form";
import {Container , Row} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import FormStyle from "../../../../css/web/Form.module.css";
import productImg from "../../../../assets/items/2.jpg";
import Topimg from '../../../../assets/topimg39.png';

function AddReview() {
    const [description, setDescription] = useState("");
    
    const title={
        margin: '4px',
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    const textareaStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',        
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'           
    };
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
      //   backgroundSize: 'cover',  
        repeat: 'none',
        padding: '0',
        MaxWidth: "100%"     
    }
    return (
        <div className="col-md-12" style={contactImg}>
            <Navigation></Navigation>
            
            <Container>
            <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px'}}>   
                <Row style={rowStyle}>                                                                      
                    <h3 style={title}>Rating & Feedback</h3>
                </Row>                                                                         
                <center>
                    <img src={productImg} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img><br /><br />
                    <h5>Pearl Wooden Dining Chair</h5>
                    <Rating></Rating>
                    <textarea style={textareaStyle} 
                        rows={5} 
                        cols={5}                             
                        placeholder='Enter your feedback here.'
                        value={description}    
                        onChange={(e)=>setDescription(e.target.value)}  
                        required
                    ></textarea><br /> 
                </center>   
                <div align="right"><br />                                   
                    <Button variant='success' type='submit'>Submit</Button> 
                </div>
            </Form>
            </Card>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default AddReview
