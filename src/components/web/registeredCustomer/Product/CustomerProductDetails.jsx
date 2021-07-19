import React , { useState , useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Rating from "../../Common/StartRating";
import FormStyle from "../../../../css/web/Form.module.css";
import item4 from "../../../../assets/items/1.jpg";
import CommonStyle from "../../../../css/web/common.module.css";

function CustomerProductDetails({itemDetails}) {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [itemId,setItemID]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")    
    
    console.log(itemDetails); //undefine
    console.log("On the customer view product details");

    useEffect(() => {                
        if (itemDetails) {            
            setItemID(() => itemDetails.itemId);
            setName(() => itemDetails.name);
            setPrice(() => itemDetails.price);
            setDescription(() => itemDetails.details);
            // console.log(itemDetails.name);
        }
    }, [itemDetails]);

    return (        
        <div>            
            <Container>
                <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', padding:'30px', boxShadow:'0px 0px 5px #000'}}>                         
                    <Row className="justify-content-md-center" xs={12}>
                        <Col sm={6}>
                            <img src={item4} className={CommonStyle.Productimage} alt='product'></img>
                        </Col>
                        <br />
                        <Col sm={6}>
                            <Container>
                                <center>
                                    {/* <h1>Serena Single Seater</h1> */}
                                    <input 
                                        type='text' 
                                        value = {name}
                                        style = {{color : 'black'}}
                                    />
                                    <h2>Rs. 72975</h2><br />
                                    <p align='justify'>A sophisticated bedroom chair with traditional flared arms. The two-tone finish and soft-to-the-touch fabric upholstery, along with the piping trim that elegantly outlines the edges, create an outstanding impression.</p><br />
                                    <Rating></Rating>
                                    <Link to="/cart"><button class="addtocart">Add to cart</button></Link>
                                </center>
                            </Container>
                        </Col>                        
                    </Row>                                                
                </Card>
                <br />
            </Container>    
        </div>
    )
}

export default CustomerProductDetails
