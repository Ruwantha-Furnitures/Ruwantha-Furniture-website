import React, { Component } from "react";
import Navigation from "../js/indexnav";
import Footer from "../../Common/js/Footer";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>   
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default Contact;