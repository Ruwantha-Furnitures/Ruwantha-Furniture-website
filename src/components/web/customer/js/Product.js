import React, { Component } from "react";
import Navigation from "../js/indexnav";
import Footer from "../../Common/Footer";
import ProductBox from "../js/ProductCards";
 
class Product extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>    
        <ProductBox></ProductBox>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default Product;

