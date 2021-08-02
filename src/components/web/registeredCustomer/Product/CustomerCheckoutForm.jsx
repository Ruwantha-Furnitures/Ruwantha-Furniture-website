import React, { useState, useEffect } from 'react';
import "../../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Avatar from '../../../../assets/shipping.png';
import axios from 'axios';

function CustomerCheckoutDeteailsForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [district,setDistrict]=useState([])    
    const [productDetails,setProductDetails]=useState({})

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");    
    const [telephone, setTelephone] = useState("");       
    const [address, setAddress] = useState("");       

    // to load the district when the page is first rendered
    useEffect(() => {
        const itemID=localStorage.getItem('productID')
        getAllDistricts();
        getProductData(itemID)
    },[])

    const getAllDistricts = async() => {
        try {
           console.log('Requests send in delivery charge') // done
           let res =await axios.get('http://192.168.56.1:3002/api/payment/deliverycharge/')
           console.log(res.data.deliveryCharge); // received deliveryCharge from the backend API
           setDistrict(res.data.deliveryCharge);// set the received deliveryCharge into the district state array
        } catch (error) {
            console.log(error);
        }
    }

    const getProductData =async(itemID) =>{
        try{
            const res=await axios.get(`http://192.168.56.1:3002/api/products/viewProduct/${itemID}`); // wil receive the response
            //console.log(res.data) //view the response object data
            setProductDetails(res.data) // set the response data to the state of productDetails object
        }catch (error){
          console.log(error);
        } 
    }

    const title={
        margin: '0px',
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

    const textboxStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',
        height: '40px',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'               
    };

   
    return (                    
        <div>     
            <Container>
            <Row sm={12}>
                <Col sm={8}>
                    <Card style={{marginBottom: '20px'}}>                        
                        <Form style={{padding: '20px'}}>   
                            <Row style={rowStyle}>                                
                                <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                                <center><h2 style={title}>Shipping Details</h2></center>
                            </Row>                                                       
                            
                            <h5>Personal Information</h5>
                            <Row sm={12}>
                                <Col sm={6}>
                                    <input style={textboxStyle}
                                        type='text' 
                                        placeholder='Enter your first name'
                                        value={fname}
                                        onChange={(e)=>setFName(e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6}>
                                    <input style={textboxStyle}
                                        type='tel' 
                                        placeholder='Enter your last name'
                                        value={lname}
                                        onChange={(e)=>setLName(e.target.value)}
                                        required
                                    />
                                </Col>                                
                            </Row>    
                            <input style={textboxStyle}
                                type='tel' 
                                placeholder='Enter your telephone number'
                                value={telephone}
                                onChange={(e)=>setTelephone(e.target.value)}
                                required
                            ></input>                        
                            <br /><br />
                            <h5>Shipping Address</h5>
                            <input style={textboxStyle}
                                type='text' 
                                placeholder='Enter your address' 
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                required
                            ></input>     
                            {/* <input type='text' placeholder='Enter your city' style={textboxStyle}></input>                              */}
                            <select style={textboxStyle} required>
                                <option style={{color:'red'}} value="" disabled selected hidden >Select your district</option>
                                {district.map((districtList) =>(  
                                    <option value={districtList.area} name='district'>{districtList.area}</option>
                                ))}
                            </select>

                            <br /><br />
                            <div align="right">
                                <Button variant="danger" type='reset'>Cancel</Button>{' '}
                                <Link to='/customer_paymentGateway'><Button variant="success">Continue for payment</Button>{' '}</Link>
                            </div>                         
                        </Form>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Form style={{padding: '20px',margin: '10px'}}>
                            <center><h2>Your Order</h2></center><br/>
                            <Row sm={12}>
                                <Col sm={6}>
                                    <Form.Label>Total Purchase</Form.Label>  
                                </Col>
                                <Col sm={6}>
                                    <Form.Label>{productDetails.price}</Form.Label> 
                                </Col>
                            </Row> 
                            <Row sm={12}>
                                <Col sm={6}>
                                    <Form.Label>Discount</Form.Label>  
                                </Col>
                                <Col sm={6}>
                                    <Form.Label>{productDetails.discount}</Form.Label> 
                                </Col>
                            </Row> 
                            <Row sm={12}>
                                <Col sm={6}>
                                    <Form.Label><b>Total</b></Form.Label>  
                                </Col>
                                <Col sm={6}>
                                    <Form.Label><b style={{fontSize: '20px'}}>Rs. 69326.25</b></Form.Label> 
                                </Col>
                            </Row> 
                        </Form>
                    </Card>
                </Col>
            </Row>  
            </Container>                                    
        </div>
    );
}

export default CustomerCheckoutDeteailsForm;
