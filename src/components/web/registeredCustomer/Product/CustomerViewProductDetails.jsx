import React from 'react';
import Navigation from "../Navigation/UserNav";
import Product from "./CustomerProductDetails";
import Footer from "../../Common/Footer";

function CustomerViewProductDetails() {
    return (
        <div>
            <Navigation></Navigation> 
            <Product></Product>
            <Footer></Footer>
        </div>
    )
}

export default CustomerViewProductDetails
