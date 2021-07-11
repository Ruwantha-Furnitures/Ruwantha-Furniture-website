import React, { useState } from "react";
import { Container} from 'reactstrap';
import Navigation from "../customer/Indexnav";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import backcover from "../../../assets/topimg30.jpg";
import "../../../css/web/Login.css";
import axios from "axios";

const Login = ({navigation}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const loginHandler = async (data) => {
      console.log(data);
      try {
        setIsLoading(true);
        let response = await axios.post(
          "http://192.168.56.1:3002/api/customer/login",
          {
            data,
          }
        );
        if (response.data.state === "Successful") {
          setIsLoading(false);
          setErrorMessage("");
          console.log("Entered correct username and password");
          navigation.navigate("/customer_home");
        } else {
          setIsLoading(false);
          let errorMessage = response.data.errorMessage;
          setErrorMessage(errorMessage);
          console.log(errorMessage);
        }
      } catch (error) {
        console.error(error);
      }
    };
  

    return (
        <div style={{              
            backgroundImage: `url(${backcover})`,        
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit:'cover',
            height: '100%',
            width: '100%',        
          }}>        
            <Navigation></Navigation>                    
            <Container align="left">                  
                <LoginForm navigation={navigation} loginHandler={loginHandler} ></LoginForm>               
            </Container>              
            <Footer></Footer>
        </div> 
    );
}

export default Login;