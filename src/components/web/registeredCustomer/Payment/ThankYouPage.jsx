import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Topimg from "../../../../assets/topimg32.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { addSellProduct } from "../../../Dashboard/service/sellProduct";

function ThankYouPage() {
  const [cartItemData,setCartDetails]=useState([]);   
  const [cartProductArray,setCartProductArray]=useState([]);   
  

  const order_id = localStorage.getItem("NewOrderID");
  // const cartData = JSON.parse(localStorage.getItem("cartItemsIDs"));
  const customer_id = localStorage.getItem("CustomerID");
  const first_name = localStorage.getItem("CustomerFName");
  const last_name = localStorage.getItem("CustomerLName");
  const shipping_address = localStorage.getItem("CustomerAddress");
  const total_product_amount = localStorage.getItem("cartTotal");
  const contact_number = localStorage.getItem("CustomerTelephone");
  const charge_id = localStorage.getItem("DeliveryChargeID");
  const total_amounts = localStorage.getItem("finalTotalAmount");
  const payment_method = "ONLINE";
  
  // alert(new Date().toLocaleString())

  const [isOrderSubmit, setIsOrderSubmit] = useState(false);
  const [isPaymentSubmit, setIsPaymentSubmit] = useState(false);
  const [isSellProductSubmit, setIsSellProductSubmit] = useState(false);
  const [isShippingDataSubmit, setIsShippingDataSubmit] = useState(false);
  const [IsCartDeleted, setIsCartDeleted] = useState(false);
  var sellProduct
  
  useEffect( async() => {  
  
      const orders = { total_product_amount: total_product_amount	, customer_id:customer_id, payment_method:payment_method};
      console.log(orders)
      try{            
          let response = await axios.post("http://localhost:8080/api/order",orders);
          console.log(response.data);
          if(response.status === 200){
            setIsOrderSubmit(true)
          }else{
            setIsOrderSubmit(false)
          }
      }catch (error) {
          if (error.response.status === 500) {
              console.log("There was a problem with the server: ", error);
          } else {
              console.log(error.response.data.msg);
          }
      }      

      //add payment
      const paymentdata = { order_id:order_id, total_amounts:total_amounts};      
      try{                      
          let response = await axios.post('http://localhost:8080/api/payment',paymentdata);
          console.log(response.data);
          if(response.status === 200){
            setIsPaymentSubmit(true)
          }else{
            setIsPaymentSubmit(false)
          }
      }catch (error) {
          if (error.response.status === 500) {
              console.log("There was a problem with the server: ", error);
          } else {
              console.log(error.response.data.msg);
          }
      }    

      //add shipping details
      const shippingdata = {
        order_id: order_id,
        first_name: first_name,
        last_name: last_name,
        shipping_address: shipping_address,
        contact_number: contact_number,
        charge_id: charge_id,
      };      
      try{                      
          let response = await axios.post('http://localhost:8080/api/shippingDetail',shippingdata);
          console.log(response.data);
          if(response.status === 200){
            setIsShippingDataSubmit(true)
          }else{
            setIsShippingDataSubmit(false)
          }
      }catch (error) {
          if (error.response.status === 500) {
              console.log("There was a problem with the server: ", error);
          } else {
              console.log(error.response.data.msg);
          }
      }

      //get cart products details  
      const cartResponse = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);   
      setCartDetails(cartResponse.data) 
      console.log(cartResponse.data)
                        
      {cartItemData.map((productList) =>(      
          sellProduct = {
            id: productList.id,
            product_id: productList.product_id,                        
            quantity: productList.quantity,            
          }      
        ))
        setCartProductArray(sellProduct) 
        // console.log(sellProduct)
        

        const productResponse = await axios.get(`http://localhost:8080/api/product/${cartProductArray.product_id}`);             
        console.log(productResponse.data)
        const price = productResponse.data.price          
        const discount = productResponse.data.discount

        //add sell product data
        const sellProductdata = {
            product_id: cartProductArray.product_id,
            price: price,
            quantity: cartProductArray.quantity,
            discount: discount,
            order_id: order_id,  
        }
        console.log(sellProductdata)

        try{                                        
            let response = await axios.post('http://localhost:8080/api/sellProduct',sellProductdata);
            console.log(response.data);
            if(response.status === 200){
              setIsSellProductSubmit(true)
            }else{
              setIsSellProductSubmit(false)
            }
        }catch (error) {
            if (error.response.status === 500) {
                console.log("There was a problem with the server: ", error);
            } else {
                console.log(error.response.data.msg);
            }
        }
        
        // if((isOrderSubmit === true) && (isPaymentSubmit === true) && (isSellProductSubmit === true) && (isShippingDataSubmit === true)){
        //delete cart data
          try{                                       
              let response = await axios.delete(`http://localhost:8080/api/customerCart/id/${cartProductArray.id}`)
              console.log(response.data);
              if(response.status === 200){
                setIsCartDeleted(true)
              }else{
                setIsCartDeleted(false)
              }
          }catch (error) {
              if (error.response.status === 500) {
                  console.log("There was a problem with the server: ", error);
              } else {
                  console.log(error.response.data.msg);
              }
          }
    }
             
  }, []);
  
 
 
  
  const contactImg = {
    backgroundImage: `url(${Topimg})`,
    repeat: "none",
    backgroundSize: "cover",
    padding: "0",
    MaxWidth: "100%",
  };
  const insidediv = {
    backgroundColor: "rgb(0,0,0,0.8)",
    height: "100%",
    width: "100%",
    color: "white",
    padding: "70px",
    justifyItem: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  
  const redirectThankYou = <Redirect to="/customer_thankyou"></Redirect>;
  return (
    <React.Fragment>
      {(IsCartDeleted === true) && (isOrderSubmit === true) && (isPaymentSubmit === true) && (isSellProductSubmit === true) && (isShippingDataSubmit === true) && (redirectThankYou)}
      {(IsCartDeleted === false) && (
        <div style={contactImg}>
          <Navigation></Navigation>
          <Container align="left">
            <Form style={insidediv}>
              <p style={{ fontSize: "5rem" }}>Thank You!</p>
              <p style={{ fontSize: "2rem" }}>
                Your order was completed successfully.
              </p>
              <br />
              <br />
              <p style={{ fontSize: "2rem" }}>
                Your Order ID: {localStorage.getItem("NewOrderID")}
              </p>
              <br />
              <Link to="/customer_home">
                <Button variant="success">Go to Home Page</Button>
              </Link>{" "}
            </Form>
          </Container>
          <br />
          <Footer></Footer>
        </div>
      )}
    </React.Fragment>
  );
}

export default ThankYouPage;
