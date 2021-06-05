import React, { Component } from "react";
import Navigation from "../js/indexnav";
import Footer from "../../Common/js/Footer";
 
class Signup extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>    
        <h2>Signup</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default Signup;

