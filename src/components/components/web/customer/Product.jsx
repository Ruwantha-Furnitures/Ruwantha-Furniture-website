import React from "react";
import Navigation from "./Indexnav";
import Footer from "../Common/Footer";
import ProductBox from "./AllProductCards";

function Product() {
  return (
    <div>
      <Navigation></Navigation>
      <ProductBox></ProductBox>
      <Footer></Footer>
    </div>
  );
}

export default Product;
