import React , { useEffect , useState } from 'react';
import { Row, Col } from "reactstrap";
import productImg from "../../../../assets/items/1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function CartDetails() {
    // const [products,setProducts]=useState([]);
    const [cartData,setCartDetails]=useState([]);
    const [cartTotalAmount, setCartTotalAmount] = useState(""); 
    var totalcounter = 0;

    const rowStyle={
        margin: '10px'
    };

    // to load the cart product 
    useEffect(() => {
        let customer_id =localStorage.getItem('CustomerID');                
        const fecthData=async()=>{
            try {                
                const cartResponse = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);   
                setCartDetails(cartResponse.data)      
                console.log(cartResponse.data)                     
            } catch (error) {
                console.log(error)
            }
        }
        fecthData()
    },[])
    
    function getTotal(price,quantity){
        
        const total = (Number)(price * quantity)
        // var myNumberWithTwoDecimalPlaces=parseFloat(myNumber).toFixed(2); 
        var totalTwoDecimalPlaces=parseFloat(total).toFixed(2); 
        totalcounter = (Number)(totalcounter) + (Number)(totalTwoDecimalPlaces)
        localStorage.setItem("cartTotal",totalcounter);
        return totalTwoDecimalPlaces;
    }    


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
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price Rs.</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map((productList) =>(                                                                                  
                                    <tr>                                        
                                        <td>{productList.id}</td>
                                        <td><img src={productList.product.img_location} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                        <td>{productList.product.name} </td>
                                        <td>{productList.product.price} </td>
                                        <td>{productList.quantity}</td>
                                        {/* <td>{(Number)(productList.product.price)*(Number)(productList.quantity)}</td> */}
                                        <td>{getTotal(productList.product.price,productList.quantity)}</td>
                                        <td><DeleteForeverIcon /></td>
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

export default CartDetails
