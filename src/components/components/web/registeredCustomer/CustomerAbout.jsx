import React from 'react';
import Card from 'react-bootstrap/Card'
import Navigation from "./UserNav";
import Footer from "../Common/Footer";
import PropTypes from 'prop-types';

CustomerAbout.propTypes = {
    
};

function CustomerAbout(props) {
    return (
        <div>
            <Navigation></Navigation>   
            <h2>About</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Footer></Footer>
        </div>
    );
}

export default CustomerAbout;