import React , { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Rating from './StarRating';
import Form from "react-bootstrap/Form";
import productImg from "../../../../assets/items/2.jpg";

function AddReviewPopup(props) {
    const [description, setDescription] = useState("");
    

    const textareaStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',        
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'           
    };

    return (
        
        <div>
            <Form style={{padding: '40px'}} >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Rating & Feedback
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <img src={productImg} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img><br /><br />
                        <h4>Pearl Wooden Dining Chair</h4>
                        <Rating></Rating>
                        <textarea style={textareaStyle} 
                            rows={5} 
                            cols={5}                             
                            placeholder='Enter your feedback here.'
                            value={description}    
                            onChange={(e)=>setDescription(e.target.value)}  
                            required
                        ></textarea><br /> 
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' type='submit' onClick={props.onHide}>Submit</Button>                    
                </Modal.Footer>
                </Modal>
                </Form>
        </div>
    )
}

export default AddReviewPopup
