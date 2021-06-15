import React from 'react';
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./ProductCards";

function Product(props) {
    return (
        <div>
            <Navigation></Navigation>    
            <ProductBox></ProductBox>
            <Footer></Footer>
        </div>
    );
}

export default Product;