import React, {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Container } from 'reactstrap';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import ProductBox  from "./CustomerAllProducts";
// import Search from "../../Common/SearchProduct";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Rating from "../../Common/StartRating";
import { Link } from "react-router-dom";
import SliderProducts from "../../Common/ProductSlider";
import CommnStyles from "../../../../css/web/common.module.css";
import "../../../../css/web/Home.css";
import axios from "axios";

const CustomerProduct = () => {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [allcategory,setAllCategory]=useState([])    
    const [category, setCategory] = useState(-1);    
    const [products,setProducts]=useState([])   
    const [typesIDs,setTypeIDs]=useState([]);   
    const [selectedProducts,setSelectedProducts]=useState([]);   
<<<<<<< HEAD
    const [isFiltered,setisFiltered]=useState(false); 
=======
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd

    useEffect(() => {
        console.log(category)
        getCategories();
        viewAllProducts();          
    },[])    
    
    const getCategories = async() => {
        try {       
        //    let res =await axios.get('http://192.168.56.1:3002/api/category/')    
            let res =await axios.get('http://localhost:8080/api/category/')          
            setAllCategory(res.data);// set the received deliveryCharge into the district state array   
            console.log(res.data);    
        } catch (error) {
            console.log(error);
        }
    }

    const viewAllProducts = async () => {        
        try {           
           let response = await axios.get("http://localhost:8080/api/product");
           console.log(response.data); // received products from the backend API
           setProducts(response.data);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }

    //adding selected product Id to the localstorage
    function sayHello(itemid) {
        //alert(`hello, ${itemid}`);
        localStorage.setItem("productID", itemid);
        console.log(localStorage.getItem("productID"));  
        
        //cart label number
    }

    const getSelectedCategoryID = async(categoryID) =>{
        console.log(categoryID)
        const category_id = categoryID
        const typeResponse = await axios.get(`http://localhost:8080/api/typeforcategory/${category_id }`)
        console.log(typeResponse.data)
        setTypeIDs(typeResponse.data)

        const length = typeResponse.data.length;

        var filterProducts =[];

        for(let i=0; i<(Number)(length); i++){
            console.log( typeResponse.data[i].id)
            const type_id = typeResponse.data[i].id            

            const selectedProductResponse = await axios.get(`http://localhost:8080/api/productfortype/${type_id}`); 
                    
            var newobject = selectedProductResponse.data;
            console.log(newobject);
        
<<<<<<< HEAD
            if((Number)(newobject.length) >= 0 ){
                for(let i=0; i<(Number)(newobject.length); i++){
                    filterProducts.push(newobject[i]);
                }
            }            
=======
            filterProducts.push(newobject);
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
            
        }  
        console.log(filterProducts);
        setSelectedProducts(filterProducts);
<<<<<<< HEAD
        setisFiltered(true)
        // console.log(selectedProducts);            
=======
        console.log(selectedProducts);            
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
    }

    const funitureimg = {
      marginTop: "30px",      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '20px'
    };

    const contactImg = {  
        //backgroundImage: `url(${Coverimg})` ,              
        MaxWidth: "100%"
    }

    const textboxStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',
        height: '40px',
        borderRadius: '5px',
        padding: '5px',        
        border: 'solid 1px darkgray'               
    };

<<<<<<< HEAD
    console.log(selectedProducts);            
    console.log(isFiltered);     
=======
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
    return (
        <div style={contactImg}>  
        <Navigation></Navigation>          
        <Row sm={12} align="justify">
            <Col sm={12}>                
                <Card>     
                    {/* <Search></Search>*/}
                    <Container>
                        <div>            
                            <Navbar expand="lg"  sticky="top" style={{ maxWidth:'100%', marginTop:'0px', marginBottom: '20px'}}>            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Form inline>
                                    <Row>
                                        <select style={textboxStyle} value={category} onChange={(e)=> getSelectedCategoryID(e.target.value)}>                    
                                            <option value="-1" disabled hidden selected>Choose a category</option>                                                              
                                            {allcategory.map((categoryList) =>(                                                                                                      
                                                <option value={categoryList.id} >{categoryList.name}</option>                                
                                            ))}
                                        </select>                       
                                    </Row>                     
                                </Form>
                            </Navbar.Collapse>
                            </Navbar>                       
                        </div>
                        <br /><br />
                        <SliderProducts></SliderProducts>
                        <br />
                    </Container>
                    <Card.Body>                                                
                        {/* <center><ProductBox itemUpHandler={itemUpHandler}></ProductBox></center> */}
                        <center>
                            
                            {/* <ProductBox></ProductBox> */}
                            <div className={CommnStyles.gridContainer}>
<<<<<<< HEAD
                            {(isFiltered=== false) && (<>
=======
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
                                {products.map((productList) =>(  
                                <Container>
                                    <Row sm={12}>
                                        <Col sm={3}>
                                            <center>
                                            <Card style={{width: '18rem'}}> 
                                                <center>      
                                                    <img src={productList.img_location} alt='items' style={funitureimg} width={200} height={150}></img>    
                                                    {/* src={process.env.PUBLIC_URL + '/items/'+ productList.itemid +'.jpg'}               */}
                                                </center>
                                                <br />
                                                <center> {productList.name} </center>                                                   
                                                    <p class="textinbox">                        
                                                        Rs. {productList.price}<br />                                        
                                                    </p>
                                                <center>    
<<<<<<< HEAD
                                                    <Rating dataFromParent = {productList.id} ></Rating>
=======
                                                    <Rating></Rating>
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
                                                </center>
                                                <center>
                                                    <Link to="/viewProductDetail"><button class="addtocart" onClick={() => sayHello(productList.id)}>Read More</button></Link>
                                                </center>                                                                                       
                                            </Card> 
                                            <br />   
                                            </center>                                   
                                        </Col>
                                    </Row>
                                    </Container>
<<<<<<< HEAD
                                ))} 
                            </>  )}        
                            {(isFiltered=== true) && (Array.isArray(selectedProducts) === true) && (<>
                                {selectedProducts.map((selectedproductList) =>(  
                                <Container fluid >                                  
                                    <Card style={{width: '18rem'}}> 
                                        <center>      
                                            <img src={selectedproductList.img_location} alt='items' style={funitureimg} width={200} height={150}></img>                                                        
                                        </center>
                                        <br />
                                        <center> {selectedproductList.name} </center>                                                   
                                        <p class="textinbox">                        
                                            Rs. {selectedproductList.price}<br />                                        
                                        </p>
                                        <center>    
                                        <Rating></Rating>
                                        </center>
                                        <center>
                                            <Link to="/viewProductDetail"><button class="addtocart" onClick={() => sayHello(selectedproductList.id)}>Read More</button></Link>
                                        </center>                                                                                       
                                    </Card> 
 
                               
                                    {/* <Row sm={12}>
                                        <Col sm={3}>
                                            <center>
                                            <Card style={{width: '18rem'}}> 
                                                <center>      
                                                    <img src={selectedproductList[0].img_location} alt='items' style={funitureimg} width={200} height={150}></img>                                                        
                                                </center>
                                                <br />
                                                <center> {selectedproductList[0].name} </center>                                                   
                                                    <p class="textinbox">                        
                                                        Rs. {selectedproductList[0].price}<br />                                        
                                                    </p>
                                                <center>    
                                                    <Rating></Rating>
                                                </center>
                                                <center>
                                                    <Link to="/viewProductDetail"><button class="addtocart" onClick={() => sayHello(selectedproductList[0].id)}>Read More</button></Link>
                                                </center>                                                                                       
                                            </Card> 
                                            <br />   
                                            </center>                                   
                                        </Col>
                                    </Row> */}
                                    </Container>
                                ))} 
                            </>  )}               
=======
                                ))}                    
>>>>>>> 9d4470edaa6d234336b6e3935f55b6378517b3fd
                            </div>
                        
                        </center>
                    </Card.Body>
                </Card>  
                <br />
            </Col> 
        </Row>                                              
        <Footer></Footer>    
    </div>
    )
}

export default CustomerProduct;

