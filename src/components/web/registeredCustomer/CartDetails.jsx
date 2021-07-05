import React from 'react';
import { Container, Row, Col } from "reactstrap";
import productImg from "../../../assets/items/1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function CartDetails() {
    const [itemCount, setItemCount] = React.useState(1);

    const backcontainer = {
        marginTop: "20px",
        backgroundColor: "#CAC1C1",
        padding: "5px",
        borderRadius: "20px",        
        marginBottom: "15px",
      };
      const innercontainer = {        
        backgroundColor: "#FFF",
        padding: "10px",
        borderRadius: "20px",
        width: "100%"
      };
    return (
        <div>
            <Container style={backcontainer}>                
                <Container style={innercontainer}>
                    <Row sm={12}>
                        <Col sm={12}>
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
                </Container>                   
            </Container>
        </div>
    )
}

export default CartDetails
