import React , {  useState } from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import {Container , Row} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import FormStyle from "../../../../css/web/Form.module.css";
import Topimg from '../../../../assets/topimg39.png';
import { Rating } from '@material-ui/lab';
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useEffect } from 'react';

function AddReview() {
    const [product_id, setProductID] = useState("");
    const [feedback, setDescription] = useState("");
    const [rating_points, setRating] = React.useState(1);

    const [reviewProduct, setReviewProduct] = useState("");

    
    useEffect(() => {
        fetchProductData()
    }, [])

    const submitHandler = async(e) => {       
        e.preventDefault();
        //data from the form
        const data = { product_id, feedback, rating_points };
        
        console.log(rating_points)
        
        
      };
    
    const fetchProductData = async() => {
        let id =localStorage.getItem('ReviewProductID');  
        setProductID(id)

        const orderResponse = await axios.get(`http://localhost:8080/api/product/${id}`)
        console.log(orderResponse.data) 
        setReviewProduct(orderResponse.data)       
    }

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
            <Form style={{padding: '20px'}} onSubmit={submitHandler}>   
                <Row style={rowStyle}>                                                                      
                    <h3 style={title}>Rating & Feedback</h3>
                </Row>                                                                         
                <center>
                    <img src={reviewProduct.img_location} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img><br /><br />
                    <h5>{reviewProduct.name}</h5>

                    <Box component="fieldset" mb={3} borderColor="transparent">                        
                        <Rating
                        name="simple-controlled"
                        value={rating_points}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        />
                    </Box>

                    <textarea style={textareaStyle} 
                        rows={5} 
                        cols={5}                             
                        placeholder='Enter your feedback here.'
                        value={feedback}    
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