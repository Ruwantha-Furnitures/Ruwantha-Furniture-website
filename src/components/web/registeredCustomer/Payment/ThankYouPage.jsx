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
      
      //get order ID
      try{                             
        const maxOrderIDResponse = await axios.get("http://localhost:8080/api/order");
        console.log(maxOrderIDResponse.data);  
        console.log(maxOrderIDResponse.data.length)   
        
        if(maxOrderIDResponse.data.length === 0){
            const newOrderID =  1
            localStorage.setItem("NewOrderID",newOrderID)
            console.log(newOrderID)
        }else{
            const length = maxOrderIDResponse.data.length
            console.log(maxOrderIDResponse.data[(Number)(length)-1].id)

            const newOrderID = maxOrderIDResponse.data[(Number)(length)-1].id          

            localStorage.setItem("NewOrderID",newOrderID)
            console.log(newOrderID)
        }            
    }catch (error){
      console.log(error);
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

      // -----------------------------------------------------------------------------------------------------------------

      //get cart products details  
      const cartResponse = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);   
      setCartDetails(cartResponse.data) 
      console.log(cartResponse.data)
                        
      const length = cartResponse.data.length

      // ---------------------------------------------------------------------------------------------------------------------

      // let cartProductArray = cartItemData.map((productList) =>(    
      //     tempID = productList.id,
      //     tempProductID = productList.product_id,
      //     tempQuantity = productList.quantity         
      // ))

      for(let i=0; i<(Number)(length); i++ ){
          console.log(cartResponse.data[i])        
          
          const product_id = cartResponse.data[i].product.id
          console.log(product_id)

          const price = cartResponse.data[i].product.price
          console.log(price)

          const discount = cartResponse.data[i].product.discount
          console.log(discount)

          const cartID = cartResponse.data[i].id
          console.log(cartID)

          const quantity = cartResponse.data[i].quantity
          console.log(quantity)

          const sellProductdata = {
              product_id: product_id,
              price: price,
              quantity: quantity,
              discount: discount,
              order_id: order_id,  
          }

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

          console.log(cartID)
            try{                                             
                  let response = await axios.delete(`http://localhost:8080/api/customerCart/id/${cartID}`)
                  console.log(response.data);
                 
              }catch (error) {
                  console.log(error)
              }                  
      }     
            
      // ---------------------------------------------------------------------------------------------------------------------
        
        // const product_id = cartProductArray.tempProductID

        // const productResponse = await axios.get(`http://localhost:8080/api/product/${product_id}`);             
        // console.log(productResponse.data)
        // const price = productResponse.data.price          
        // const discount = productResponse.data.discount

        // //add sell product data
        // const sellProductdata = {
        //     product_id: tempProductID,
        //     price: price,
        //     quantity: tempQuantity,
        //     discount: discount,
        //     order_id: order_id,  
        // }
        // console.log(sellProductdata)

        // try{                                        
        //     let response = await axios.post('http://localhost:8080/api/sellProduct',sellProductdata);
        //     console.log(response.data);
        //     if(response.status === 200){
        //       setIsSellProductSubmit(true)
        //     }else{
        //       setIsSellProductSubmit(false)
        //     }
        // }catch (error) {
        //     if (error.response.status === 500) {
        //         console.log("There was a problem with the server: ", error);
        //     } else {
        //         console.log(error.response.data.msg);
        //     }
        // }
        
        // // if((isOrderSubmit === true) && (isPaymentSubmit === true) && (isSellProductSubmit === true) && (isShippingDataSubmit === true)){
        // //delete cart data
        //   try{                   
        //       const id = tempID
            
        //       let response = await axios.delete(`http://localhost:8080/api/customerCart/id/${id}`)
        //       console.log(response.data);
        //       if(response.status === 200){
        //         setIsCartDeleted(true)
        //       }else{
        //         setIsCartDeleted(false)
        //       }
        //   }catch (error) {
        //       if (error.response.status === 500) {
        //           console.log("There was a problem with the server: ", error);
        //       } else {
        //           console.log(error.response.data.msg);
        //       }
        //   }
    
             
  }, []);
  
  console.log(isOrderSubmit)
  console.log(isPaymentSubmit)
  console.log(isSellProductSubmit)
  console.log(isShippingDataSubmit)
 
  
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
      {(isOrderSubmit === true) && (isPaymentSubmit === true) && (isSellProductSubmit === true) && (isShippingDataSubmit === true) && (redirectThankYou)}
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

