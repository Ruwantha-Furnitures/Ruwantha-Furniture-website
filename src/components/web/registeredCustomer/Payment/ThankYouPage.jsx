import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Topimg from "../../../../assets/topimg32.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function ThankYouPage() {
  const orderid = localStorage.getItem("NewOrderID");
  const itemid = localStorage.getItem("productID");
  const custid = localStorage.getItem("userAccID");
  const fname = localStorage.getItem("CustomerFName");
  const lname = localStorage.getItem("CustomerLName");
  const address = localStorage.getItem("CustomerAddress");
  const city = localStorage.getItem("CustomerArea");
  const telephone = localStorage.getItem("CustomerTelephone");
  const chargeid = localStorage.getItem("DeliveryChargeID");
  const price = localStorage.getItem("finalTotalAmount");
  const date = new Date().toLocaleString();
  // alert(new Date().toLocaleString())

  const [isPaymentSubmit, setIsPaymentSubmit] = useState(false);
  const [isPurchaseOrderSubmit, setIsPurchaseOrderSubmit] = useState(false);

  const payment = { orderid, price, date };
  const order = {
    orderid,
    itemid,
    custid,
    fname,
    lname,
    address,
    city,
    telephone,
    chargeid,
  };

  useEffect(() => {
    addPayment(payment);
    addPurchaseOrder(order);
  }, []);

  const addPayment = async (data) => {
    try {
      const res = await axios.post(
        "http://192.168.56.1:3002/api/payment/addpayment",
        {
          data,
        }
      );

      if (res.status === 200) {
        setIsPaymentSubmit(true);
      }

      if (res.data.auth === true) {
        setIsPaymentSubmit(true);
      } else {
        setIsPaymentSubmit(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPurchaseOrder = async (data) => {
    try {
      const res = await axios.post(
        "http://192.168.56.1:3002/api/payment/addpurchaseorder",
        {
          data,
        }
      );
      if (res.data.auth === true) {
        setIsPurchaseOrderSubmit(true);
      } else {
        setIsPurchaseOrderSubmit(false);
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
