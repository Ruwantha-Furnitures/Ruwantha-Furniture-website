import React from 'react';
import { Container, Row, Col } from "reactstrap";
import productImg from "../../../assets/items/1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartDetails() {
    const [itemCount, setItemCount] = React.useState(1);

    const rowStyle={
        margin: '10px'
    };

    return (
        <div>
            <Card style={{marginBottom: '20px'}}>
                <Form style={{padding: '20px'}}>
                    <Row sm={12} style={rowStyle}>
                        <Col sm={12}>
                            <h2>Shopping Cart</h2><br />
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price Rs.</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                        
                                        <td>1</td>
                                        <td><img src={productImg} style={{width:'100px', borderRadius: '20px'}}></img></td>
                                        <td>Serena Single Seater</td>
                                        <td>72975</td>
                                        <td>1</td>
                                        <td>72975</td>
                                        <td><DeleteForeverIcon /></td>
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

export default CartDetails
