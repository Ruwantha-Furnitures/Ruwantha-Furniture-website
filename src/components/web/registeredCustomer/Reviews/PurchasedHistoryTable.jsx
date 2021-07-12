import React from 'react';
import { Row, Col } from "reactstrap";
import productImg from "../../../../assets/items/2.jpg";
import Table from 'react-bootstrap/Table';
import GradeIcon from '@material-ui/icons/Grade';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';

function PurchasedHistoryTable() {
    const rowStyle={
        margin: '10px'
    };

    return (
        <div>
            <Card style={{marginBottom: '20px'}}>
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
                                    <tr>                                        
                                        <td>1</td>
                                        <td><img src={productImg} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                        <td>Pearl Wooden Dining Chair</td>
                                        <td>6875</td>
                                        <td>1</td>
                                        <td>6875</td>
                                        <td><GradeIcon /></td>
                                    </tr>                                    
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
