import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import SignForm from "./SignupForm";
import backcover from "../../../../assets/topimg27.jpg";
import { Container } from "reactstrap";
import axios from "axios";

const Signup = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const signUpHandler = async (data) => {
    console.log(data);
    try {
      const { email, password } = data;
      const account = {
        email: email,
        password: password,
      };
      const { name, address, contactNo } = data;

      // create account
      const responseAccount = await axios.post(
        "http://localhost:8080/api/account",
        account
      );

      // const response = await axios.get(`http://localhost:8080/api/product/${id}`)

      const account_id = responseAccount.data.id;

      const customer = {
        name: name,
        address: address,
        account_id: account_id,
        contact_number: contactNo,
      };

      // customer create
      const responseCustomer = await axios.post(
        "http://localhost:8080/api/customer",
        customer
      );

      console.log(responseCustomer + " " + responseAccount);

      //   const respond = await axios.post("http://localhost:8080/api/customer",{
      //   data,
      // });
      // if(respond.data.auth === true){
      //   setIsSubmit(true);
      // }else{
      //   setIsSubmit(false);
      // }

      // console.log("Request successful");
    } catch (error) {
      console.log(error);
    }
  };

  const redirectHome = <Redirect to="/login"></Redirect>;
  return (
    <React.Fragment>
      {isSubmit === true && redirectHome}
      {isSubmit === false && (
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
            <SignForm signUpHandler={signUpHandler}></SignForm>
          </Container>
          <Footer></Footer>
        </div>
      )}
    </React.Fragment>
  );
};

export default Signup;
