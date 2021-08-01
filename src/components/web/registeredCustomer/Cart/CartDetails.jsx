import React , { useEffect , useState } from 'react';
import { Row, Col } from "reactstrap";
import productImg from "../../../../assets/items/1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function CartDetails() {
    const [products,setProducts]=useState([]);
    const [cartData,setCartDetails]=useState([]);

    const rowStyle={
        margin: '10px'
    };

    // to load the cart product 
    useEffect(() => {
        let accountID=localStorage.getItem('userAccID');        
        console.log(accountID); //done
        const fecthData=async()=>{
            try {                
                let res=await axios.get(`http://192.168.56.1:3002/api/cart/viewcart/${accountID}`);    
                setCartDetails(res.data.cartItems)      
                console.log(res.data.cartItems)         
                
                //Add a loop for cartItems's item ids
                
                    //console.log("Item-ID")
                    // console.log(ItemList.itemid) // undefined
                    
                    // const res2=await axios.get(`http://192.168.56.1:3002/api/products/viewProduct/${cartData.itemid}`) // wil receive the response
                    // setProducts(res2.body.data)                 

                

            } catch (error) {
                console.log(error)
            }
        }
        fecthData()
    },[])



    return (
        <div>            
            <Card style={{marginBottom: '20px'}}>
                <Form style={{padding: '20px'}}>
                    <Row sm={12} style={rowStyle}>
                        <Col sm={12}>
                            <h2 style={{textAlign:'center'}}>Shopping Cart</h2><br />
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
                                    {products.map((productList) =>(                                                                                  
                                    <tr>                                        
                                        <td>{productList.itemid}</td>
                                        <td><img src={productImg} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                        <td>product name</td>
                                        <td>72975</td>
                                        <td>1</td>
                                        <td>72975</td>
                                        <td><DeleteForeverIcon /></td>
                                    </tr>   
                                    ))};                                 
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
