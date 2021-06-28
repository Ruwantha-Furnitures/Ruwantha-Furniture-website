import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../../css/web/Login.css";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function CheckoutForm() {
    const formlabel = {
        color: "#FFF",
        paddig: "20px"
    }

    const loginform = {    
        justifyContent: "left",
        justifyItem: "left",
        margin: "0px",
        padding: "40px",          
        backgroundColor: "#fc7a30",            
        backgroundColor: "rgb(1,1,1,0.8)",    
        borderRadius: "20px",                    
        color: "#FFF"
    }

    return (
        <div className="Login" >         
            <Form style={loginform} align="left">   
                <center><h2>SUMMARY</h2></center>
                <Form.Group size="sm" controlId="email">  
                <Form.Label>Total Amount</Form.Label>              
                <Form.Control className={FormStyle.textBox}                             
                    type="type"    
                    value="Asini"
                    placeholder="Email"                                        
                />
                </Form.Group>
                <Form.Group size="sm" controlId="quantity">   
                <Form.Label>Total Quantity</Form.Label>              
                <Form.Control className={FormStyle.textBox}  
                    type="text"
                    value="Asini"
                    placeholder="Password"                    
                />
                </Form.Group>
                <center><button block size="lg" type="submit" className={NavButtonStyle.btn}>Checkout</button></center>
            </Form>
        </div>
    )
}

export default CheckoutForm;
