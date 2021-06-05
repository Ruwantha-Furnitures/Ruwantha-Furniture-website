import React, { Component } from "react";
import Navigation from "../js/indexnav";
import Footer from "../../Common/js/Footer";
 
class About extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>   
        <h2>About</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>          
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
 
export default About;