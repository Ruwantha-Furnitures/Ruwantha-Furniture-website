import React,{useState,useEffect} from 'react';
import Form from "react-bootstrap/Form";
import {Row} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FormStyle from "../../../../css/web/Form.module.css";
import Avatar from "../../../../assets/avatar.png";
import axios from 'axios';

function UpdateProfileForm({updateHandler}) {
    require("bootstrap/dist/css/bootstrap.min.css");
    const [userDetails,setUserDetails] =useState();
    const [first_name,setFName]=useState("")
    const [last_name,setLName]=useState("")
    const [address, setAddress] = useState("");
    const [contact_number, setTelephone] = useState("");    

    const submitHandler = () => {
        const userDetails ={first_name,last_name,address,contact_number}
        updateHandler(userDetails)
    }
    
    useEffect(() => {
        let customerID=localStorage.getItem('CustomerID');
        let accountEmail=localStorage.getItem('userEmail')
        
        const fecthData=async()=>{
            try {                
                let response=await axios.get(`http://localhost:8080/api/customer/${customerID}`)
                // let response=await axios.get(`${URI}:3002/api/customer/viewprofile/${accountID}`)
                const {first_name,last_name,address, contact_number}=response.data
                const userData={
                    accountEmail,
                    first_name,
                    last_name,
                    address,
                    contact_number,
                }
                setUserDetails(()=>userData)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fecthData()
    },[])

    useEffect(() => {
        if (userDetails) {          
            setFName(() => userDetails.first_name);
            setLName(() => userDetails.last_name);   
            setAddress(() => userDetails.address);
            setTelephone(() => userDetails.contact_number);
        }
      }, [userDetails]);
                
    const title={
        margin: '10px',
        padding: '3px',
    };

    const rowStyle={
        margin: '10px'
    };

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
            <Card className={FormStyle.cardbox} style={{marginBottom: '20px', width: '21rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '15px'}}>
                    <Row style={rowStyle}>                                
                        <center><img src={Avatar} alt={Avatar} width={50} height={50}></img></center>
                        <center><h3 style={title}>Update Profile</h3></center>
                    </Row> 
                    <label style={{margin: '4px'}}><b>First Name</b></label>                                     
                    <input type='text' value={first_name} onChange={(e)=>setFName(e.target.value)} style={textboxStyle} required></input><br />
                    <label style={{margin: '4px'}}><b>Last Name</b></label>                                     
                    <input type='text' value={last_name} onChange={(e)=>setLName(e.target.value)} style={textboxStyle} required></input><br />
                    <label style={{margin: '4px'}}><b>Address</b></label><br />  
                    <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} style={textboxStyle} required></input><br />
                    <label style={{margin: '4px'}}><b>Contact No (+94)</b></label><br />    
                    <input type='text' value= {contact_number} pattern="[0-9]{9}" onChange={(e)=>setTelephone(e.target.value)} style={textboxStyle} required></input><br />                  
                    {/* <label style={{margin: '4px'}}><b>Email</b></label><br />                               */}
                    {/* <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} style={textboxStyle} required></input><br />                                */}
                    <div align="right"><br />                                       
                        <Link to='/customer_deleteProfile'><Button variant="danger">Delete Profile</Button></Link>{' '}
                        <Button variant="success" onClick={submitHandler}>Update</Button>{' '}                     
                    </div>                                                     
                </Form>                                                          
            </Card>
        </div>
    )
}

export default UpdateProfileForm
