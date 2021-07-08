import React,{useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../Common/StartRating";
import item from "../../../assets/items/1.jpg";
import "../../../css/web/Home.css";
import axios from "axios";

const CustomerAllProducts = props => {
    require("bootstrap/dist/css/bootstrap.min.css");    
    const [itemCount, setItemCount] = React.useState(0);
    const [products,setProducts]=useState([])

    // to load the product when the page is first rendered
    useEffect(() => {
        viewAllProducts();
    },[])

    const viewAllProducts = async() => {
        try {
           console.log('Requests send') // done
           let response =await axios.get('http://192.168.56.1:3002/api/products/')
           console.log(response.data.products); // received products from the backend API
           setProducts(response.data.products);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }
  
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

    // const num = [3, 8, 11, 7, 5];

    // const num2x = num.map((n) => n * 2);

    // console.log(num2x); 

    // return (
    //     <div className="users">
    //       {data.map((user) => (
    //         <div className="user">{user}</div>
    //       ))}
    //     </div>
    // );
           
    return (
        <div>
            {products.map((productList) => (
                <Row sm={12}>            
                <Col sm={4}>                
                    <div>
                        <center>                    
                        <Card style={{ width: '18rem' , border: 'solid 1px black'}}>
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
                                <Card.Title><center> {productList.name} </center></Card.Title>
                                <Card.Text>                    
                                    <p class="textinbox">                        
                                        Rs. {productList.price}
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
            ))}
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
