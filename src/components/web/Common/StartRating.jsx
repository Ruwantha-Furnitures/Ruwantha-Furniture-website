import React from "react";
import { Rating } from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";

export default function StarRating(props) {
    const [value, setValue] = React.useState(1);
    const [rateData,setRateDetails]=useState([]);   

    const setRateDetails = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);   
    setCartDetails(setRateDetails.data) 
    console.log(setRateDetails.data)    

    return (
        <div>        
            <div>Data from parent is: {props.dataFromParent}</div>
    
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
            </Box> 
     
        </div>
    );
}
