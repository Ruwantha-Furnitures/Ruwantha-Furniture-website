import React, { useState, useEffect } from 'react';
import "../../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Avatar from '../../../../assets/shipping.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FormatListNumberedRtlTwoTone } from '@material-ui/icons';

function ShippingDeteailsForm() {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [district,setDistrict]=useState([])    
    const [productDetails,setProductDetails]=useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");    
    const [telephone, setTelephone] = useState("");       
    const [address, setAddress] = useState(""); 
    const [area, setArea] = useState("");           
    
    //form submit handler
    const submitHandler = () => {        
        const data = { fname, lname, telephone, address,area };
        // console.log(data);
        localStorage.setItem("CustomerFName",fname);
        localStorage.setItem("CustomerLName",lname);
        localStorage.setItem("CustomerTelephone",telephone);
        localStorage.setItem("CustomerAddress",address);
        localStorage.setItem("CustomerArea",area);
        setIsSubmit(true);
      };

    // to load the district when the page is first rendered
    useEffect(() => {
        const itemID=localStorage.getItem('productID')
        getAllDistricts();
        // getProductData(itemID)
        // getTotal();
    },[])

    const getAllDistricts = async() => {
        try {
           console.log('Requests send in delivery charge') // done
           let res =await axios.get("http://localhost:8080/api/deliveryCharge/")
        //    console.log(res.data); // received deliveryCharge from the backend API
           setDistrict(res.data);// set the received deliveryCharge into the district state array
           
        } catch (error) {
            console.log(error);
        }
    }

    // const getProductData =async(id) =>{
    //     try{
    //         const res=await axios.get(`http://localhost:8080/api/api/products/${id}`); // wil receive the response
    //         //console.log(res.data) //view the response object data
    //         setProductDetails(res.data) // set the response data to the state of productDetails object
    //     }catch (error){
    //       console.log(error);
    //     } 
    // }

    // function getTotal(price,discount){
    //     const total = (Number)(price - (price*discount/100))
    //     // var myNumberWithTwoDecimalPlaces=parseFloat(myNumber).toFixed(2); 
    //     var totalTwoDecimalPlaces=parseFloat(total).toFixed(2); 

    //     localStorage.setItem("productPrice",price);
    //     localStorage.setItem("productDiscount",discount);
    //     localStorage.setItem("totalAfterDiscount",totalTwoDecimalPlaces);
    //     return totalTwoDecimalPlaces;
    // }    

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

    const redirectPaymentPage = <Redirect to="/customer_productDetails_payment" />;
    return (          
        <React.Fragment>
            {isSubmit === true && redirectPaymentPage}
            {isSubmit === false && (
                <div>     
                <Container>
                <Row sm={12}>
                    <Col sm={8}>
                        <Card style={{marginBottom: '20px'}}>                        
                            <Form style={{padding: '20px'}} onSubmit={submitHandler}>   
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
                                            type='text' 
                                            placeholder='Enter your last name'
                                            value={lname}                                            
                                            onChange={(e)=>setLName(e.target.value)}
                                            required
                                        />
                                    </Col>                                
                                </Row>    
                                <input style={textboxStyle}
                                    type='tel' 
                                    pattern="[0-9]{10}"     
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
                                <select style={textboxStyle} onChange={(e)=>setArea(e.target.value)} required>
                                    <option style={{color:'red'}} value="" disabled selected hidden >Select your district</option>
                                    {district.map((districtList) =>(                                          
                                        <option value={districtList.area}>{districtList.area}</option>
                                    ))}
                                </select>
    
                                <br /><br />
                                <div align="right">
                                    <Button variant="danger" type='reset'>Cancel</Button>{' '}
                                    {/* <Link to='/customer_paymentGateway'><Button variant="success" type='submit'>Continue for payment</Button>{' '}</Link> */}
                                    <Link to='paymentForm'><Button variant="success" type='submit'>Continue for payment</Button></Link>{' '}
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
                                        <Form.Label>{parseFloat(localStorage.getItem('cartTotal')).toFixed(2)}</Form.Label> 
                                    </Col>
                                </Row> 
                                <Row sm={12}>
                                    <Col sm={6}>
                                        <Form.Label style={{fontSize:'16px'}}><b>After Discount</b></Form.Label>  
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Label style={{fontSize:'16px'}}><b>Rs. {localStorage.getItem('afterDiscount')}</b></Form.Label> 
                                    </Col>
                                </Row> 
                                <Row sm={12}>
                                    <Col>
                                        <Form.Label><i style={{fontSize:'9px'}}>**Delivery charged will be added. Click on Continue for payment</i></Form.Label>  
                                    </Col> 
                                </Row> 
                            </Form>
                        </Card>
                    </Col>
                </Row>  
                </Container>                                    
            </div>
            ) }
        </React.Fragment>                  
    );
}

export default ShippingDeteailsForm;
