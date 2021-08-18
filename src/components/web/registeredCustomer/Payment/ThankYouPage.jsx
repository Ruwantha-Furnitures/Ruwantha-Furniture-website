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
    const [cartItemData,setCartDetails]=useState([]);   
    const order_id = localStorage.getItem("NewOrderID");
    const cartData = JSON.parse(localStorage.getItem("cartItemsIDs"));
    const customer_id = localStorage.getItem("userAccID");
    const fname = localStorage.getItem("CustomerFName");
    const lname = localStorage.getItem("CustomerLName");
    const address = localStorage.getItem("CustomerAddress");
    const total_product_amount = localStorage.getItem("cartTotal");
    const telephone = localStorage.getItem("CustomerTelephone");
    const chargeid = localStorage.getItem("DeliveryChargeID");
    const total_amounts = localStorage.getItem("finalTotalAmount");
  
    // alert(new Date().toLocaleString())

    const [isPaymentSubmit, setIsPaymentSubmit] = useState(false);
    const [isPurchaseOrderSubmit, setIsPurchaseOrderSubmit] = useState(false);
    const [isSellProductSubmit, setIsSellProductSubmit] = useState(false);
    const [isShippingDataSubmit, setIsShippingDataSubmit] = useState(false);        
   
    useEffect(() => {    
        const fecthData=async()=>{
          try {                
              const cartResponse = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);   
              setCartDetails(cartResponse.data) 
              console.log(cartResponse.data)                                    
                
              var cartItemIds= []; 
              {cartResponse.data.map((productList) =>(      
                  cartItemIds = productList.data.id               
              ))}          
                  
              console.log(cartItemIds)
              localStorage.setItem("cartItemsIDs", JSON.stringify(cartItemIds));
                  
          } catch (error) {
              console.log(error)
          }
        }     
        fecthData()                       
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
