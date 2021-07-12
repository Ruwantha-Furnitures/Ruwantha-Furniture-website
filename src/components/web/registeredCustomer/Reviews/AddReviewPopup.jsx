import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Rating from './StarRating';
import productImg from "../../../../assets/items/2.jpg";

function AddReviewPopup(props) {
    // function AddReviewPopup(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Rating 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <img src={productImg} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img><br /><br />
                        <h4>Pearl Wooden Dining Chair</h4>
                        <Rating></Rating>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' type='submit' onClick={props.onHide}>Close</Button>                    
                </Modal.Footer>
                </Modal>
        </div>
    )
}

export default AddReviewPopup
