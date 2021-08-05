import React , { useEffect, useState } from 'react';
import "../../../../css/web/Login.css";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'reactstrap';
import Avatar from '../../../../assets/shipping.png';
import CommonStyle from '../../../../css/web/common.module.css';
import axios from 'axios';
import {Customer, CurrencyType,PayhereCheckout, CheckoutParams} from 'payhere-js-sdk';
import {Payhere, AccountCategory} from "payhere-js-sdk";

// Sandbox 
Payhere.init("1217736",AccountCategory.SANDBOX)

const CustomerPaymentForm = () => {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [deliveryChargeData, setDeliveryChargeData] = useState("");
        
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");    
    const [telephone, setTelephone] = useState("");       
    const [address, setAddress] = useState(""); 
    const [area, setArea] = useState("");   

    const [email, setCustomerEmail] = useState("");
    const [productName, setProductName] = useState("");    

    const [price, setPrice] = useState("");   
    const [discount, setDiscount] = useState("");   
    const [afterDiscount, setAfterDiscount] = useState("");       

    const [deliveryCharge, setDeliveryCharge] = useState("");    
    const [deliveryChargeID, setDeliveryChargeID] = useState(""); 
    const [currentOrderId, setCurrentOrderId] = useState("");      
    

    // to load the district when the page is first rendered
    useEffect(() => {
        setFName(localStorage.getItem('CustomerFName'))
        setLName(localStorage.getItem('CustomerLName'))
        setTelephone(localStorage.getItem('CustomerTelephone'))
        setAddress(localStorage.getItem('CustomerAddress'))
        setArea(localStorage.getItem('CustomerArea'))       

        setCustomerEmail(localStorage.getItem('CustomerEmail')) 
        setProductName(localStorage.getItem('productName'))

        setPrice(localStorage.getItem('productPrice'))
        setDiscount(localStorage.getItem('productDiscount'))
        setAfterDiscount(localStorage.getItem('totalAfterDiscount'))        
        
        getDeliveryCharge();

        setDeliveryCharge(deliveryChargeData.amount); 
        setDeliveryChargeID(deliveryChargeData.chargeid);
                                 
        getOrderId();
        
    },[])

    const getDeliveryCharge =async() =>{
        const area = localStorage.getItem('CustomerArea')
        try{
            const res=await axios.get(`http://192.168.56.1:3002/api/payment/deliverychargefordistrict/${area}`); // wil receive the response
            console.log(res.data) //view the response object data
            setDeliveryChargeData(res.data) // set the response data to the state of productDetails object                        
            localStorage.setItem('DeliveryChargeID',res.data.chargeid);
        }catch (error){
          console.log(error);
        } 
    }

    function calculateToatalAmount(afterDiscount,deliveryCharge){
        const totalAmount = Number(afterDiscount) + Number(deliveryCharge);
        const totalTwoDecimalPlaces=parseFloat(totalAmount).toFixed(2);         
        localStorage.setItem("finalTotalAmount",totalTwoDecimalPlaces);              
        return totalTwoDecimalPlaces
    }

    function onPayhereCheckoutError(errorMsg) {
        alert(errorMsg)
    }

    const getOrderId =async() =>{
        try{
            // alert("in orderId")       
            const res=await axios.get(`http://192.168.56.1:3002/api/purchseorders/getpurchaseorders/`); // wil receive the response
            console.log(res.data.count) //view the response object data
            setCurrentOrderId(res.data.count) // set the response data to the state of productDetails object     
            // alert(res.data.count)  
            const newOrder =   (Number)(currentOrderId + 1 );            
            localStorage.setItem("NewOrderID",newOrder);                   
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
  
      async function checkout(){          
            // using async await
            try {
              const customer = new Customer({
                first_name: { fname },
                last_name: { lname },
                phone: { telephone },
                email: { email },
                address: {address},
                city: {area},
                country: "Sri Lanka",
              })
              const checkoutData = new CheckoutParams({
                returnUrl: 'http://localhost:3000/customer_thankyou',
                cancelUrl: 'http://localhost:3000/cancel',
                notifyUrl: 'http://localhost:8080/notify',
                order_id: `${ localStorage.getItem('NewOrderID') }`,
                itemTitle: `${ localStorage.getItem('productName') }`,
                currency: CurrencyType.LKR,
                amount: `${ localStorage.getItem('finalTotalAmount') }`,
              })
            
              const checkout = new PayhereCheckout(customer,checkoutData,onPayhereCheckoutError)
              checkout.start()
            }
            catch(err){
              console.log(err)
            }
      }
    
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
                                    <input type='text' value={fname} style={textboxStyle} disabled></input>
                                </Col>
                                <Col sm={6}>
                                    <input type='tel' value={lname} style={textboxStyle} disabled></input>
                                </Col>                                
                            </Row>    
                            <input type='tel' value={telephone} style={textboxStyle} disabled></input>                        
                            <br /><br />
                            <h5>Shipping Address</h5>
                            <input type='text' value={address} style={textboxStyle} disabled></input>     
                            <input type='text' value={area} style={textboxStyle} disabled></input>                             
                            <br /><br />                                                     
                        </Form>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card style={{padding: '20px'}}>                        
                        <center><h2>Your Order</h2></center><br/>
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Total Purchase</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>{ price }</Form.Label> 
                            </Col>
                        </Row>                        
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Discount</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>{discount}%</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>After Discount</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>{ afterDiscount }</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label>Delivery Charge</Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label>{deliveryChargeData.amount}</Form.Label> 
                            </Col>
                        </Row> 
                        <Row sm={12}>
                            <Col sm={6}>
                                <Form.Label><b style={{fontSize: '20px'}}>Total</b></Form.Label>  
                            </Col>
                            <Col sm={6}>
                                <Form.Label><b style={{fontSize: '20px'}}>Rs.{' '}{ calculateToatalAmount(afterDiscount,deliveryChargeData.amount) }</b></Form.Label> 
                            </Col>
                        </Row>  
                        <br />   
                        <center>                                                                                     
                            {/* <PaymentModal
                                // Use a unique value for the orderId
                                // orderId={45896588}
                                // name="Canton Dining Suite"
                                // amount="69826.25"
                            /> */}
                            {/* <Link  to="/customer_paymentGateway"><button>Checkout Demo</button></Link> */}
                            <button onClick={checkout} className={CommonStyle.paybtn}>Pay with Payhere</button>
                        </center>                                                    
                        
                    </Card>
                </Col>
            </Row>  
            </Container>                               
        </div>
    );
};

export default CustomerPaymentForm;
