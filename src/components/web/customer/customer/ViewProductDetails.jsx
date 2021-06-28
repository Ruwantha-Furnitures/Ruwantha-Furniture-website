import React from 'react';
import Navigation from "./Indexnav";
import Product from "../Common/ProductDetails";
import Footer from "../Common/Footer";

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
