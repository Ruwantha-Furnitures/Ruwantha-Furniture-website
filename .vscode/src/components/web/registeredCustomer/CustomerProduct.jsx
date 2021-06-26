import React from 'react';
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import ProductBox from "./CustomerAllProducts";

function CustomerProduct() {
    return (
        <div>
            <Navigation></Navigation>
            <ProductBox></ProductBox>
            <Footer></Footer>
        </div>
    )
}

export default CustomerProduct
