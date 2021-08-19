import React , { useState , useEffect } from 'react';
import Navigation from "../Navigation/UserNav";
import Product from "./CustomerProductDetails";
import Footer from "../../Common/Footer";
import axios from "axios";

function CustomerViewProductDetails() {

    const [itemDetails,setItemDetails] =useState();

    return (
        <div>
            <Navigation></Navigation>             
            <Product></Product>
            <Footer></Footer>
        </div>
    )
}

export default CustomerViewProductDetails
