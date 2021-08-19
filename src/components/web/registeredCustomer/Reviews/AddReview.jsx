import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Button from 'react-bootstrap/Button';

function AddReview() {
    return (
        <div>
            <Navigation></Navigation>
            <Form style={{padding: '20px'}}>                                                       
                <h3>Add Rating & Feedback</h3>    
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
                <Button variant='success' type='submit' onClick={props.onHide}>Submit</Button> 
            </Form>
            <Footer></Footer>
        </div>
    )
}

export default AddReview
