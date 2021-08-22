import React from "react";
import { Row, Col } from "reactstrap";
import Navigation from "../Navigation/Indexnav";
import Footer from "../../Common/Footer";
import ProductBox from "./AllProductCards";
import Search from "../../Common/SearchProduct";
import SliderProducts from "../../Common/ProductSlider";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Rating from "../../Common/StartRating";
import { Link } from "react-router-dom";
import SliderProducts from "../../Common/ProductSlider";
import CommnStyles from "../../../../css/web/common.module.css";
import "../../../../css/web/Home.css";
import axios from "axios";

const Product = () => {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [allcategory,setAllCategory]=useState([])    
  const [category, setCategory] = useState(-1);    
  const [products,setProducts]=useState([])   
  const [typesIDs,setTypeIDs]=useState([]);   
  const [selectedProducts,setSelectedProducts]=useState([]);   
  const [isFiltered,setisFiltered]=useState(false); 

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
      
          filterProducts.push(newobject);
          
      }  
      console.log(filterProducts);
      setSelectedProducts(filterProducts);
      setisFiltered(true)
      // console.log(selectedProducts);            
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

  console.log(selectedProducts);            
  console.log(isFiltered);  

    return (
        <div style={contactImg}>
            <Navigation></Navigation>
            <Row sm={12} align="justify">
                <Col sm={12}>
                    <Card>
                        <Search></Search>

                        <Card.Body>
                            <center>
                                <br />
                                <SliderProducts></SliderProducts>
                                <br />
                                <ProductBox itemUpHandler={itemUpHandler}></ProductBox>
                            </center>
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Product;
