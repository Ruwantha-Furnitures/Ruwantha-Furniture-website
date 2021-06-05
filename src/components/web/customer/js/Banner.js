import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'  ;
import Slide1 from "../../../../assets/slideshow/s1.jpg";
import Slide2 from "../../../../assets/slideshow/s2.jpg";
import Slide3 from "../../../../assets/slideshow/s3.jpg";
import Slide4 from "../../../../assets/slideshow/s4.jpg";
import Slide5 from "../../../../assets/slideshow/s5.jpg";
import Slide6 from "../../../../assets/slideshow/s6.jpg";
import Slide7 from "../../../../assets/slideshow/s7.jpg";
import Slide8 from "../../../../assets/slideshow/s8.jpg";
import Slide9 from "../../../../assets/slideshow/s9.jpg";
import Slide10 from "../../../../assets/slideshow/s10.jpg";

export class Banner extends Component {  
    render() {  
  
        return (  
            <div>                   
                <div className='container-fluid' >  
                    <Carousel> 
                        <Carousel.Item style={{'height':"500px"}} >  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide1}  />  
                            <Carousel.Caption>  
                                <h3>Ruwantha Furniture</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item  >  
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide2}  />  
                            <Carousel.Caption>  
                                <h3>Ruwantha Furniture</h3>   
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide3}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide4}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide5}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide6}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide7}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide8}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide9}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                        <Carousel.Item style={{'height':"500px"}}>  
                            <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                src={Slide10}  />  
                                <Carousel.Caption>  
                                    <h3>Ruwantha Furniture</h3>   
                                </Carousel.Caption>  
                        </Carousel.Item> 
                    </Carousel>                          
                </div>  
            </div>  
            )  
        }
}
export default Banner  