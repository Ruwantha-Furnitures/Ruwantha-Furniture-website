import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide9 from "../../../assets/topimg6.jpg";
import Slide10 from "../../../assets/topimg8.jpg";

function ProductSlider() {
    return (
        <div>
            <div style={{ marginTop: "-50px" }}>
                <Carousel>                
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide9}
                        alt="img"
                        />
                        <Carousel.Caption>
                        <h3>AR Magic</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide10}
                        alt="img"
                        />
                        <Carousel.Caption>
                        <h3>AR Magic</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default ProductSlider;





