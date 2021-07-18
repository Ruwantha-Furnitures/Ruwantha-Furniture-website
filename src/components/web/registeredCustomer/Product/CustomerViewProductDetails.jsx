import React , { useState } from 'react';
import Navigation from "../Navigation/UserNav";
import Product from "./CustomerProductDetails";
import Footer from "../../Common/Footer";
import axios from "axios";

function CustomerViewProductDetails() {

    const [itemDetails,setItemDetails] =useState();
    // const updateHandler=(data)=>{

        const getProductData=async(data)=>{
            let itemID=localStorage.getItem('productID');
            try {                
                let response=await axios.get(`http://192.168.56.1:3002/api/product/viewProduct/${itemID}`,{data}) //add product api
                console.log(response.data);
                const {itemId, name,price, details}=response.data
                const itemData={
                    itemId,
                    name,
                    price,
                    details,
                }
                setItemDetails(()=>itemData)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }

    // }

    return (
        <div>
            <Navigation></Navigation> 
            <Product itemDetails={itemDetails}></Product>
            <Footer></Footer>
        </div>
    )
}

export default CustomerViewProductDetails
