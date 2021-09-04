import React, { useState, useEffect } from "react";
import Navigation from "../customer/Navigation/Indexnav";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import backcover from "../../../assets/topimg30.jpg";
import "../../../css/web/Login.css";
import { Container } from "reactstrap";
import axios from "axios";

const Login = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userLevel, setUserLevel] = useState(null);

  useEffect(() => {
    console.log(localStorage.getItem("userlevel"));
  }, [isLoading]);

  const loginHandler = async (data) => {
    try {
      console.log(data.email);
      // var md5 = require('md5');
      // console.log(md5('123456')) //e10adc3949ba59abbe56e057f20f883e
      const email = data.email;
      const password = data.password;

      let response = await axios.get(
        `http://localhost:8080/api/login/${email}`
      );

      console.log(response.data);

      const dbpassword = response.data.password;
      // console.log(dbpassword)

      var md5 = require("md5");
      const encryptpw = md5(password);
      // console.log(md5('123456'))
      // console.log(encryptpw)

      console.log(response.data.user_level);

      const accountId = response.data.id;
      let onlineCustomerData = await axios.get(
        `http://localhost:8080/api/onlineCustomerLogin/${accountId}`
      );
      console.log(onlineCustomerData);

      const userAccID = onlineCustomerData.data.account_id;
      const CustomerID = onlineCustomerData.data.customer_id;
      console.log(userAccID);

      if (dbpassword === encryptpw) {
        console.log("password matched");
        if (response.status === 200 && response.data.user_level === 1) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel", 1);
          localStorage.setItem("userEmail", response.data.email);
          localStorage.setItem("userAccID", userAccID);
          localStorage.setItem("CustomerID", CustomerID);
          setUserLevel(1);
        } else if (response.status === 200 && response.data.user_level === 0) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel", 0);
          localStorage.setItem("userEmail", response.data.email);
          setUserLevel(0);
          window.location = "/dashboard";
        } else if (response.status === 200 && response.data.user_level === 2) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel", 2);
          localStorage.setItem("userEmail", response.data.email);
          setUserLevel(2);
          window.location = "/dashboard";
        } else if (response.status === 200 && response.data.user_level === 3) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel", 3);
          localStorage.setItem("userEmail", response.data.email);
          setUserLevel(3);
          window.location = "/dashboardDriver";
        } else {
          console.log(localStorage.getItem("userlevel"));
          setIsLoading(false);
          let errorMessage = response.data.errorMessage;
          setErrorMessage(errorMessage);
          alert("Invalid email or password");
        }
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const redirectHome = <Redirect to="/customer_home" />;
  // const redirectDashboard = <Redirect to="/dashboard" />

  return (
    <React.Fragment>
      {isLoading === true && userLevel === 1 && redirectHome}
      {/* {isLoading === true && (userLevel === 2 || userLevel === 0 || userLevel === 3) && (redirectDashboard)} */}
      {isLoading === false && (
        <div
          style={{
            backgroundImage: `url(${backcover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <Navigation></Navigation>
          <Container align="left">
            <LoginForm
              navigation={navigation}
              loginHandler={loginHandler}
            ></LoginForm>
          </Container>
          <Footer></Footer>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
