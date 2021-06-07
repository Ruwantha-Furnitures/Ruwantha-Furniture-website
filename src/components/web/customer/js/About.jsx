import React from 'react';
import Navigation from "./Indexnav";
import Footer from "../../Common/js/Footer";
import PropTypes from 'prop-types';

About.propTypes = {
    
};

function About(props) {
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

export default About;