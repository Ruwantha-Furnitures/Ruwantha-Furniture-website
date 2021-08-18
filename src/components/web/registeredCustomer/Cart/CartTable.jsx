import React , { useEffect , useState } from 'react';
import {Container, Row, Col } from "reactstrap";
import productImg from "../../../../assets/items/1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Redirect } from 'react-router';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Navigation from "../Navigation/UserNav";
import CustomerCheckoutForm from "./CartOrderDetailsForm";
import Footer from "../../Common/Footer";
import axios from 'axios';

function CartDetails() {    
    const [cartData,setCartDetails]=useState([]);    
    const [cartTotalAmount, setCartTotalAmount] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);
    
    var totalcounter = 0;
    var caldiscount = 0.00;

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
                
                console.log(cartResponse.data.length)                
                
                var cartItemIds = [];                
                {cartData.map((productList) =>(      
                    cartItemIds = productList                
                ))}          
                
                localStorage.setItem("cartItemsIDs", JSON.stringify(cartItemIds));

                //storing array in localStorage
                // var colors = ["red","blue","green"];
                // localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
                // var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back

                // console.log(cartResponse.data)                     
            } catch (error) {
                console.log(error)
            }
        }
        fecthData()
        localStorage.setItem("cartTotal",0.00);
        localStorage.setItem("afterDiscount",0.00);
        console.log(localStorage.getItem('CustomerID'))
    },[])
    
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

    const removeData = (id) => {
        axios.delete(`http://localhost:8080/api/customerCart/id/${id}`).then(res => {
            const del = cartData.filter(cartData => id !== cartData.id)
            setCartDetails(del)
        })
    }

    const redirecCart = < Redirect to="/cart" />;
    return (
        <React.Fragment>
            {(isLoading === true) && (redirecCart)}
            {(isLoading === false) && (
                <div>            
                    <Navigation></Navigation> 
                    <Container fluid>                
                        <Row sm={12}>
                            <Col sm={9}>                        
                                {/* <CustomerCartDetails></CustomerCartDetails> */}
                                <Card style={{marginBottom: '20px'}}>
                                    <Form style={{padding: '20px'}}>
                                        <Row sm={12} style={rowStyle}>
                                            <Col sm={12}>
                                                <h2 style={{textAlign:'center'}}>Shopping Cart</h2><br />
                                                <Table responsive="sm"  class="table table-hover table-bordered p-5">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            {/* <th>ID</th> */}
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Price Rs.</th>
                                                            <th>Discount</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartData.map((productList,i) =>(                                                                                  
                                                        <tr key={i}>                                        
                                                            <td>{i+1}</td>
                                                            {/* <td>{productList.id}</td> */}
                                                            <td><img src={productList.product.img_location} style={{width:'100px', borderRadius: '20px'}} alt='imgitem'></img></td>
                                                            <td>{productList.product.name} </td>
                                                            <td>{productList.product.price} </td>
                                                            <td>{productList.product.discount}%</td>
                                                            <td>{productList.quantity}</td>
                                                            {/* <td>{(Number)(productList.product.price)*(Number)(productList.quantity)}</td> */}
                                                            <td>{getTotal(productList.product.price,productList.quantity,productList.product.discount)}</td>
                                                            {/* <td><DeleteForeverIcon></DeleteForeverIcon></td> */}
                                                            <td>                                                                                                                                                                              
                                                                {/* <button className='button' onClick={() => removeData(productList.id)}>Delete</button> */}
                                                                <button class="btn btn-light" onClick={() => removeData(productList.id)}><DeleteForeverIcon></DeleteForeverIcon></button>
                                                            </td>
                                                        </tr>   
                                                        ))}                              
                                                    </tbody>
                                                </Table>
                                                
                                            </Col> 
                                        </Row>
                                    </Form>
                                </Card>            
                            </Col>

                            <Col sm={3}>
                                <CustomerCheckoutForm></CustomerCheckoutForm>  
                            </Col>
                        </Row>                                                                                                                              
                    </Container>    
                    <br /><br />  
                    <br /><br />  
                    <br /><br />        
                    <br /><br />
                    <Footer></Footer>                 
                </div>
            )}
        </React.Fragment>       
    )
}

export default CartDetails