import React , {useEffect,useState} from "react";
import { Rating } from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";

export default function StarRating(props) {
    const [value, setValue] = React.useState(1);
    const [rateData,setRateDetails]=useState([]);   
    const [rating, setRating] = React.useState(1);
    const [haveRating, setHaveRating] = React.useState(false);
    

    useEffect(() => {
        getRate()
    }, [])

    var sellProducts =[];
    const getRate = async() => {
        const product_id = props.dataFromParent
        const setRateDetailsResponse = await axios.get(`http://localhost:8080/api/productReviewForAProduct/${product_id}`);   
        setRateDetails(setRateDetailsResponse.data)         
    
        const noOfRows = setRateDetailsResponse.data.length

        var newobject = setRateDetailsResponse.data;
        // console.log(newobject);
        
        var sumRating = 0;
        var finalRating = 0;
        if((Number)(newobject.length) >= 1 ){
            console.log(newobject);
            for(let i=0; i<(Number)(newobject.length); i++){
                sellProducts.push(newobject[i]);     
                // console.log(sellProducts[i].rating_points)   
                sumRating = (Number)(sellProducts[i].rating_points) + (Number)(sumRating)  
                finalRating = (Number)(sumRating) /(Number)(noOfRows)    
                setHaveRating(true)            
            }            
        } 
        console.log(finalRating)
        setRating(finalRating) 
        console.log(rating)          

        
        // for(let i=0; i<newobject.length; i++){            
            // var totalRating = (Number)(sellProducts[i].rating_points) + (Number)(totalRating)   
            // console.log(sellProducts[i].rating_points)         
        // }
        // setRating(totalRating) 
        // console.log(rating)       
    }        

    return (
        <div>        
            {/* <div>Data from parent is: {props.dataFromParent}</div> */}
            {(haveRating === true) && (rating !==0 ) && (
            
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={rating} readOnly />
            </Box> 

            )}

            {(haveRating === false) && (rating===0) && (
            
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={rating + 1} readOnly />
            </Box> 

            )}
            
        </div>
    );
}
