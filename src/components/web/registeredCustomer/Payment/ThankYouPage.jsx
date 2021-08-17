import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Topimg from "../../../../assets/topimg32.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { addSellProduct } from "../../../Dashboard/service/sellProduct";

function ThankYouPage() {
  const order_id = localStorage.getItem("NewOrderID");
  const cartData = JSON.parse(localStorage.getItem("cartItemsIDs"));
  const custid = localStorage.getItem("userAccID");
  const fname = localStorage.getItem("CustomerFName");
  const lname = localStorage.getItem("CustomerLName");
  const address = localStorage.getItem("CustomerAddress");
  const total_product_amount = localStorage.getItem("cartTotal");
  const telephone = localStorage.getItem("CustomerTelephone");
  const chargeid = localStorage.getItem("DeliveryChargeID");
  const price = localStorage.getItem("finalTotalAmount");
  
  // alert(new Date().toLocaleString())

  const [isPaymentSubmit, setIsPaymentSubmit] = useState(false);
  const [isPurchaseOrderSubmit, setIsPurchaseOrderSubmit] = useState(false);
  const [isSellProductSubmit, setIsSellProductSubmit] = useState(false);
  const [isShippingDataSubmit, setIsShippingDataSubmit] = useState(false);

  const payment = { 
    order_id: order_id, 
    total_amounts: price
  };

  const orders = {
    id: order_id,
    total_product_amount: total_product_amount,
    customer_id : custid,    
  };
  
  const shippingData = {
    order_id: order_id,
    first_name: fname,
    last_name: lname,
    shipping_address: address,
    contact_number: telephone,
    charge_id: chargeid, 
  }

  useEffect(() => {
    addPayment(payment);
    // addOrders(orders);
    // addShippingData(shippingData);
    // addSellProduct(cartData)                 
        
  }, []);

  const addPayment = async (payment) => {
    try {
      // const res = await axios.post("http://localhost:8080/api/payment",data);

      const res = await axios.post(
        "http://localhost:8080/api/payment",
        payment
      );      

      if (res.status === 200) {
        setIsPaymentSubmit(true);
      } else {
        setIsPaymentSubmit(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const addOrders = async (data) => {
  //   try {
  //     const res = await axios.post("http://localhost:8080/api/order",data);
  //     if (res.data.auth === true) {
  //       setIsPurchaseOrderSubmit(true);
  //     } else {
  //       setIsPurchaseOrderSubmit(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const addSellProduct = async (data) => {

  //   //cart data

  //   // var sellProduct
  //   // {data.map((productList) =>(      
  //   //   sellProduct = {
  //   //     product_id: productList.id,
  //   //     order_id: order_id,
  //   //     price: productList.price,
  //   //     quantity: productList.quantity,
  //   //     discount: productList.discount,  
  //   //   }      
  //   // ))}
    
  //     try {
  //       const cartresponse = await axios.get("http://localhost:8080/api/cart")
  //       console.log(cartresponse.data)

  //       const sayHello = async(sellProduct) => {
  //         // console.log("Hello Asini")
  //         const res = await axios.post("http://localhost:8080/api/sellProduct",sellProduct);
  //         if (res.data.auth === true) {
  //           setIsSellProductSubmit(true);
  //         } else {
  //           setIsSellProductSubmit(false);
  //         }
  //       }   

  //       var sellProduct
  //       {cartresponse.data.map((productList) =>(      
  //         sellProduct = {
  //           product_id: productList.id,
  //           order_id: orderid,
  //           price: productList.price,
  //           quantity: productList.quantity,
  //           discount: productList.discount,  
  //         },
  //         sayHello(sellProduct)     
  //       ))}
            
  //     } catch (error) {
  //       console.log(error);
  //     }
    
  // };

  const addShippingData = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/api/shippingDetail",data);
      if (res.data.auth === true) {
        setIsShippingDataSubmit(true);
      } else {
        setIsShippingDataSubmit(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
  
  return (
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
  );
}

export default ThankYouPage;
