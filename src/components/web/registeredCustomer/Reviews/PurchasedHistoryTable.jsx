import React , { useEffect, useState } from 'react';
import { Row, Col } from "reactstrap";
import productImg from "../../../../assets/items/2.jpg";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import GradeIcon from '@material-ui/icons/Grade';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import AddReviewPopup from './AddReviewPopup';
import axios from 'axios';

function PurchasedHistoryTable() {
    const [modalShow, setModalShow] = React.useState(false);
    const [historyItems,setHistoryItems]=useState([]);   

    var totalcounter = 0;
    var caldiscount = 0.00;

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async() => {
        const ItemResponse = await axios.get("http://localhost:8080/api/sellProduct");   
        setHistoryItems(ItemResponse.data) 
        console.log(ItemResponse.data)
    }

    function getTotal(price,quantity,discount){        
        const total = (Number)(price * quantity)
        // var myNumberWithTwoDecimalPlaces=parseFloat(myNumber).toFixed(2); 
        var totalTwoDecimalPlaces=parseFloat(total).toFixed(2); 
        totalcounter = (Number)(totalcounter) + (Number)(totalTwoDecimalPlaces)
        localStorage.setItem("cartTotal",totalcounter);
    
        const afterDiscountForAProduct = parseFloat(((Number)(price) - ((Number)(price) * ((Number)(discount)/100))) * (Number)(quantity)).toFixed(2); 
        caldiscount = parseFloat(((Number)(price) - ((Number)(price) * ((Number)(discount)/100))) * (Number)(quantity) + (Number)(caldiscount)).toFixed(2); 
        // afterDiscount += (Number)(parseFloat((Number)(total - total*(discount/100))).toFixed(2)) ; 
        
        localStorage.setItem("afterDiscount",caldiscount);
                    
        return afterDiscountForAProduct;
    }    

    const rowStyle={
        margin: '10px'
    };

    return (
        <div>
            <Card style={{marginBottom: '20px', marginTop: '30px'}}>
                <Form style={{padding: '20px'}}>
                    <Row sm={12} style={rowStyle}>
                        <Col sm={12}>
                            <h2 style={{textAlign:'center'}}>Purchased History</h2><br />
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price Rs.</th>
                                        <th>Quantity</th>
                                        <th>Discount</th>
                                        <th>Total</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyItems.map((productList,i) =>(                                                                                  
                                    <tr key={i}>                                        
                                        <td>{i+1}</td>
                                        <td><img src={productList.product.img_location} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                        <td>{productList.product.name}</td>
                                        <td>{productList.product.price}</td>
                                        <td>{productList.quantity}</td>
                                        <td>{productList.product.discount}</td>
                                        <td>{getTotal(productList.product.price,productList.quantity,productList.product.discount)}</td>                                        
                                        <td><GradeIcon  onClick={() => setModalShow(true)}/>                                        
                                            <AddReviewPopup
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />                                        
                                        </td>
                                    </tr> 
                                    ))}                                                                          
                                </tbody>
                            </Table>
                        </Col> 
                    </Row>
                </Form>
            </Card>            
        </div>
    )
}

export default PurchasedHistoryTable
