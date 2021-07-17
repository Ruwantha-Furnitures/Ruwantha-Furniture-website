import React from 'react';
import Navigation from "../Navigation/UserNav";
import Product from "./CustomerProductDetails";
import Footer from "../../Common/Footer";
import axios from "axios";

function CustomerViewProductDetails() {
    // const updateHandler=(data)=>{

        const getProductData=async(data)=>{
            let itemID=localStorage.getItem('productID');
            try {                
                let response=await axios.put(`http://192.168.56.1:3002/api/product/viewProduct/${itemID}`,{data}) //add product api
                console.log(response.data);
            } catch (error) {
                
            }
        }

    // }

    return (
        <div>
            <Navigation></Navigation> 
            <Product getProductData={getProductData}></Product>
            <Footer></Footer>
        </div>
    )
}

export default CustomerViewProductDetails
