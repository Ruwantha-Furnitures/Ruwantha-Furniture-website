import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../Common/StartRating";
import item from "../../../assets/items/1.jpg";
import "../../../css/web/Home.css";


const CustomerAllProducts = props => {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [itemid, setItemid] = useState();
    const [name, setName] = useState();    
    const [typeid, setTypeid] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [details, setDetails] = useState();
  
    const itemHandler = e => {        
        setItemid(e.target.value)
        setName(e.target.value)
        setTypeid(e.target.value)
        setPrice(e.target.value)
        setQuantity(e.target.value)
        setDetails(e.target.value)
    };

    const [itemCount, setItemCount] = React.useState(0);
  
    const innercontainer = {
      backgroundColor: "transparent",
      padding: "6px",
      borderRadius: "20px",
      display: "flex",      
      alignItems: "center"           
    };
    const funitureimg = {
      marginTop: "30px",      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '20px'
    };

    return (
        
    <div >  
        <Row sm={12}>            
            <Col sm={4}>                
                <div>
                    <center>
                    {/*<Card style={{ width: '18rem',background: 'rgb(0,0,0,0.8)', color:'white', marginBottom: '20px', border:'solid 1px black', borderRadius: '20px'}}>*/}
                    <Card style={{ width: '18rem' , border: 'solid 1px black'}} onLoad={itemHandler}>
                        <center>
                        <img variant="top"
                            src={item}
                            alt={item}
                            width={200}
                            height={150}
                            style={funitureimg}
                        />
                        </center>
                        <Card.Body>
                            <Card.Title><center> {name} </center></Card.Title>
                            <Card.Text>                    
                                <p class="textinbox">                        
                                    Rs. {price}
                                </p>
                                <center>    
                                    <Rating></Rating>
                                </center>
                                <center>
                                    <Link to="/viewProductDetail"><button class="addtocart">Read More</button></Link>
                                </center>
                            </Card.Text>                            
                        </Card.Body>
                    </Card>          
                    </center>                              
                </div>                
            </Col>                
        </Row>        
    </div>
    )
}

export default CustomerAllProducts


// class CustomerAllProducts extends Component {

//     constructor(props) {
//       super(props);
//       this.state = {items: [], isLoading: true};
//       //this.remove = this.remove.bind(this);
//     }
  
//     componentDidMount() {
//       this.setState({isLoading: true});
  
//       fetch('http://192.168.56.1:3002/api/customer/item')
//         .then(response => response.json())
//         .then(data => this.setState({items: data, isLoading: false}));
//     }
  
//     render() {
//         const {items, isLoading} = this.state;
    
//         if (isLoading) {
//           return <p>Loading...</p>;
//         }    
//         const ItemList = items.map(item => {
//             console.log("Asini");
//             return <tr key={item.itemid}>
//                     <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>{item.typeid}</td>
//                     <td>{item.quantity}</td>
//                     <td>{item.details}</td>
//                 </tr>
//         });
//     }
// }

// export default CustomerAllProducts;
