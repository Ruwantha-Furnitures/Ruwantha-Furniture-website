import React , { useState , useEffect } from 'react';
import Navigation from "../Navigation/UserNav";
import Product from "./CustomerProductDetails";
import Footer from "../../Common/Footer";
import axios from "axios";

function CustomerViewProductDetails() {

    const [itemDetails,setItemDetails] =useState();

        // useEffect(() => {
        //     let itemID=localStorage.getItem('productID');            
        //     console.log(itemID);
        //     const fecthData=async()=>{
        //         try {                
        //             let response=await axios.get(`http://192.168.56.1:3002/api/product/viewProduct/${itemID}`)
        //             const {itemId, name,price, details}=response.data
        //             const itemData={
        //                 itemId,
        //                 name,
        //                 price,
        //                 details,
        //             }
        //             setItemDetails(()=>itemData)
        //             console.log(response.data)
        //         } catch (error) {
        //             console.log(error)
        //         }
        //     }
        //     fecthData()
        // },[])

    return (
        <div>
            <Navigation></Navigation> 
            {/* <Product itemDetails={itemDetails}></Product> */}
            <Product></Product>
            <Footer></Footer>
        </div>
    )
}

export default CustomerViewProductDetails
