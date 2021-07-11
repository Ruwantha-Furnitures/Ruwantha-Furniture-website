import React, { useState , useEffect} from "react";
import { Container} from 'reactstrap';
import Navigation from "../customer/Indexnav";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import backcover from "../../../assets/topimg30.jpg";
import "../../../css/web/Login.css";
import CommonFormStyle from "../../../css/web/common.module.css";
import axios from "axios";

const Login = ({navigation}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);         

    // useEffect(() => {
    //   console.log('useEffect')
    //   console.log(localStorage.getItem("userlevel"))
    //   if(localStorage.getItem("userlevel") === null){      
    //   setIsLoading(false)      
    //   console.log('User Authentication failed')
    //   }
    // }, [errorMessage])
  
    const loginHandler = async (data) => {
      // console.log(data);
    
      try {
        console.log('Asini');
        let response = await axios.post("http://192.168.56.1:3002/api/customer/login",
          {
            data,
          }          
        );
        if ((response.data.auth === true) && (response.data.userlevel === 1)) {
          setIsLoading(true);          
          setErrorMessage("");
          localStorage.setItem("userlevel",1);               
          // console.log(localStorage.getItem("userlevel"))
          // console.log('running');

        }else if ((response.data.state === "Successful") && (response.data.userlevel === 0 )) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel",0);          

        }else if ((response.data.state === "Successful") && (response.data.userlevel === 2)) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel",2);
          
        }else if ((response.data.state === "Successful") && (response.data.userlevel === 3)) {
          setIsLoading(true);
          setErrorMessage("");
          localStorage.setItem("userlevel",3);

        } else {
          console.log(localStorage.getItem("userlevel"))
          setIsLoading(false);
          let errorMessage = response.data.errorMessage;
          setErrorMessage(errorMessage);
          // console.log(errorMessage);
          // console.log(isLoading)
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const redirectHome=<Redirect to="/customer_home" />  ;
    const redirectDashboard= <Redirect to="/dashboard" />

    return (
      // <div style={{              
      //   backgroundImage: `url(${backcover})`,        
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   objectFit:'cover',
      //   height: '100%',
      //   width: '100%',        
      // }}>    
      
      
      <React.Fragment>

      {isLoading === true && (localStorage.getItem("userlevel") === 1)}{
        redirectHome
      }
      {isLoading === false && (<div style={{              
          backgroundImage: `url(${backcover})`,        
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit:'cover',
          height: '100%',
          width: '100%',        
        }}> 
        <Navigation></Navigation>                    
        <div className={CommonFormStyle.formPageBox} align="left">                  
            <LoginForm navigation={navigation} loginHandler={loginHandler} ></LoginForm>               
        </div>              
        <Footer></Footer></div>) } 
     
      </React.Fragment>                      
    );
}

export default Login;