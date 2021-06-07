import React from 'react';
import Navigation from "./Indexnav";
import Footer from "../../Common/js/Footer";

function Contact(props) {
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

export default Contact;