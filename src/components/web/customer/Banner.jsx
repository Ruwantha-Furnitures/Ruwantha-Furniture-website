import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../assets/slideshow/s1.jpg";
import Slide2 from "../../../assets/slideshow/s2.jpg";
import Slide3 from "../../../assets/slideshow/s3.jpg";
import Slide4 from "../../../assets/slideshow/s4.jpg";
import Slide5 from "../../../assets/slideshow/s5.jpg";
import Slide6 from "../../../assets/slideshow/s6.jpg";
import Slide7 from "../../../assets/slideshow/s7.jpg";
import Slide8 from "../../../assets/slideshow/s8.jpg";
import Slide9 from "../../../assets/slideshow/s9.jpg";
import Slide10 from "../../../assets/slideshow/s10.jpg";

function Banner() {
  return (
    <div>
      <div style={{ marginTop: "-50px" }}>
        <Carousel>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              alt="img"
              src={Slide1}
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide2}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide3}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide4}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide5}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide6}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide7}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide8}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={Slide9}
              alt="img"
            />
            <Carousel.Caption>
              <h3>AR Magic</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img
              style={{ height: "500px" }}
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
  );
}

export default Banner;
