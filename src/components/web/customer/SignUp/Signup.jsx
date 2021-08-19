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

            var md5 = require('md5'); 
            const encryptpw = md5(password);
            console.log(encryptpw)
      
            const account = {
              email: email,
              password: encryptpw,
              user_level: 1,
            };     

            console.log(account)                            

            // create account
            const responseAccount = await axios.post(
              "http://localhost:8080/api/account",
              account
            );      

            const account_id = responseAccount.data.id; //done
            // console.log(account_id)
            
            const { first_name, last_name, address, contact_number } = data;

            const customer = {
                first_name: first_name,
                last_name: last_name,
                address: address,        
                contact_number: contact_number,
            };

            // customer create
            const responseCustomer = await axios.post(
              "http://localhost:8080/api/customer",
              customer
            );

            const customer_id = responseCustomer.data.id;

            const onlineCustomer = {
              customer_id: customer_id,
              account_id: account_id,        
            };

            // online customer create
            const responseOnlineCustomer = await axios.post(
              "http://localhost:8080/api/onlineCustomer",
              onlineCustomer
            );

            console.log(responseCustomer.data + " " + responseAccount.data + " " + responseOnlineCustomer.data);

            if (responseCustomer.status === 200 && responseAccount.status === 200 && responseOnlineCustomer.status === 200) {
              setIsSubmit(true);
            } else {
              setIsSubmit(false);
            }

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
