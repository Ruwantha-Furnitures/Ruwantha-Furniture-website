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

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async() => {
        const ItemResponse = await axios.get("http://localhost:8080/api/sellProduct");   
        setHistoryItems(ItemResponse.data) 
        console.log(ItemResponse.data)
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
                                        <td>6875</td>
                                        <td>1</td>
                                        <td>6875</td>
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
