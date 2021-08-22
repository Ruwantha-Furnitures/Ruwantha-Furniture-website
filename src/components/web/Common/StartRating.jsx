import React , {useEffect,useState} from "react";
import { Rating } from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";

export default function StarRating(props) {
    const [value, setValue] = React.useState(1);
    const [rateData,setRateDetails]=useState([]);   
    const [rating, setRating] = React.useState(0);
    var totalRating

    useEffect(() => {
        getRate()
    }, [])

    const getRate = async() => {
        const product_id = props.dataFromParent
        const setRateDetailsResponse = await axios.get(`http://localhost:8080/api/productReviewForAProduct/${product_id}`);   
        setRateDetails(setRateDetailsResponse.data) 
        console.log(setRateDetailsResponse.data)    
    
        const noOfRows = setRateDetailsResponse.data.length

        
        // for(let i=0; i<noOfRows; i++){
        //     totalRating = (Number)(setRateDetailsResponse[0].rating_points) + (Number)(totalRating)            
        // }
        // setRating(totalRating)        
    }
    
    console.log(rating)

    return (
        <div>        
            {/* <div>Data from parent is: {props.dataFromParent}</div> */}
    
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
            </Box> 
     
        </div>
    );
}
