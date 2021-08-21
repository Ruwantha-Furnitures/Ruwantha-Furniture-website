import React , { useEffect, useState } from 'react';
import { Row, Col } from "reactstrap";
import Table from 'react-bootstrap/Table';
import GradeIcon from '@material-ui/icons/Grade';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PurchasedHistoryTable() {    
    const [orderIDs,setorderIDs]=useState([]);   
    const [historyItems,setHistoryItems]=useState([]);   
    const [mergeobject,setMergeObject]=useState([]); //load unena inna
    

    var totalcounter = 0;
    var caldiscount = 0.00;

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async() => {
        let customer_id =localStorage.getItem('CustomerID');  
        const orderResponse = await axios.get(`http://localhost:8080/api/customerorder/${customer_id}`)
        // console.log(orderResponse.data)
        setorderIDs(orderResponse.data)

        
        const length = orderResponse.data.length;

        var sellProducts =[];

        for(let i=0; i<(Number)(length); i++){
            console.log( orderResponse.data[i].id)
            const order_id = orderResponse.data[i].id            

            const sellProductResponse = await axios.get(`http://localhost:8080/api/customersellProduct/${order_id}`); 
            
            // const object3 = {...object1, ...object2 }
            var newobject = sellProductResponse.data;
            console.log(newobject);
            // var merge = mergeobject.data
            // sellProducts = {...sellProducts, ...newobject };
            sellProducts.push(newobject);
            // console.log(sellProducts);
            // setMergeObject(merge)  

        }  
        console.log(sellProducts);
        setHistoryItems(sellProducts);
        console.log(historyItems);            
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

    console.log(historyItems); //historyItem define wela na ekai map eke error enne
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
                                {Array.isArray(historyItems) === true && (<>
                                    {historyItems.map((productList,i) =>(                                                                                  
                                        <tr key={i}>                                        
                                            <td>{i+1}</td>
                                            <td><img src={productList[0].product.img_location} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                            <td>{productList[0].product.name}</td>
                                            <td>{productList[0].product.price}</td>
                                            <td>{productList[0].quantity}</td>
                                            <td>{productList[0].product.discount}</td>
                                            <td>{getTotal(productList[0].product.price,productList[0].quantity,productList[0].product.discount)}</td>
                                           
                                            <td>
                                                <Link to='/customer_add_reviews'><button class="btn btn-light"><GradeIcon></GradeIcon></button></Link>
                                            </td>
                                        </tr> 
                                    ))} 
                                
                                </>  )}

                                                                                                            
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
