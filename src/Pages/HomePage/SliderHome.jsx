import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SquareImage from "./SquareImage";
import './Slider.css'

function SliderHome({slide}) {
//   console.log(array);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <div className="slider-container" style={{margin:"4px"}}>
      <Slider {...settings}>
        <div>
          <SquareImage obj={slide[0]}></SquareImage>
        </div>
        <div>
          <SquareImage obj={slide[1]} ></SquareImage>
        </div>
        <div>
        <SquareImage obj={slide[2]} ></SquareImage>
        </div>
        <div>
        <SquareImage obj={slide[3]}></SquareImage>
        </div>
        <div>
        <SquareImage obj={slide[4]} ></SquareImage>
        </div>
        <div>
        <SquareImage obj={slide[5]}></SquareImage>
        </div>
      </Slider>
    </div>
  );
}

export default SliderHome;
