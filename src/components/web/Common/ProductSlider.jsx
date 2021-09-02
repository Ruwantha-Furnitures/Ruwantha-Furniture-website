import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide9 from "../../../assets/topimg6.jpg";
import Slide10 from "../../../assets/topimg9.jpg";
import Slide1 from "../../../assets/topimg36.png";
import Slide2 from "../../../assets/topimg26.jpg";
import Slide3 from "../../../assets/topimg38.jpg";
import Slide4 from "../../../assets/topimg18.jpg";

function ProductSlider() {
    return (
        <div>
            <div style={{ marginTop: "-50px" }}>
                <Carousel>                
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide2}
                        alt="img"
                        />
                        <Carousel.Caption>
                        {/* <h3><b>AR Magic</b></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide1}
                        alt="img"
                        />
                        <Carousel.Caption>
                        {/* <h3><b>AR Magic</b></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide3}
                        alt="img"
                        />
                        <Carousel.Caption>
                        {/* <h3><b>AR Magic</b></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide9}
                        alt="img"
                        />
                        <Carousel.Caption>
                        {/* <h3><b>AR Magic</b></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img
                        style={{ height: "300px" }}
                        className="d-block w-100"
                        src={Slide4}
                        alt="img"
                        />
                        <Carousel.Caption>
                        {/* <h3><b>AR Magic</b></h3> */}
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
                        {/* <h3><b>AR Magic</b></h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default ProductSlider;





