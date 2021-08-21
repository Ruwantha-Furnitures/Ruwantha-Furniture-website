import React, {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {Row} from "reactstrap";
import Button from "react-bootstrap/Button";
// import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

const SearchProduct = ({DropDownHandler}) => {    
    require("bootstrap/dist/css/bootstrap.min.css");
    const [allcategory,setAllCategory]=useState([])    
    const [category, setCategory] = useState("");    

    useEffect(() => {
        getCategories();
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

    function filterProduct(categoryname){     
        setCategory(categoryname)
        console.log(category)
        // setCategory(categoryname)
        // DropDownHandler(category)
    }

    const textboxStyle = {
        width: '100%',
        backgroundColor: '#eeeff5',
        border: 'none',
        height: '40px',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        border: 'solid 1px darkgray'               
    };

    return (
        <div>            
            <Navbar expand="lg"  sticky="top" style={{ maxWidth:'100%', marginTop:'0px', marginBottom: '20px'}}>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Row>
                        <select style={textboxStyle} value={category} onChange={(e)=>setCategory(e.target.value)}>                    
                            <option value="" disabled selected hidden>Choose a category</option>                                                              
                            {allcategory.map((categoryList) =>(                                                                                                      
                                <option value={categoryList.name} >{categoryList.name}</option>                                
                            ))}
                        </select>                       
                    </Row>                     
                </Form>
                {/* <Form inline> 
                    <input style={textboxStyle}
                        type='text' 
                        placeholder='Search' 
                        //value={address}
                        //onChange={(e)=>setAddress(e.target.value)}                        
                    ></input>                   
                </Form> */}
            </Navbar.Collapse>
            </Navbar>                       
        </div>
    );
}

export default SearchProduct;