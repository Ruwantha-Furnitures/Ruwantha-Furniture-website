import React from 'react';
import Navigation from "../Navigation/Indexnav";
import Product from "./ProductDetails";
import Footer from "../../Common/Footer";

function ViewProductDetails() {
    return (
        <div>
            <Navigation></Navigation> 
            <Product></Product>
            <Footer></Footer> 
        </div>
    )
}

export default ViewProductDetails