import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";
import './Slider.css'

function Sliders({array}) {
  // console.log(array);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true
  };
  return (
    <div className="slider-container" style={{margin:"4px"}}>
      <Slider {...settings}>
        <div>
          <Images obj={array[0]}></Images>
        </div>
        <div>
          <Images  obj={array[1]}></Images>
        </div>
        <div>
          <Images  obj={array[2]}></Images>
        </div>
        <div>
          <Images   obj={array[3]}></Images>
        </div>
        <div>
          <Images   obj={array[4]}></Images>
        </div>
        <div>
          <Images   obj={array[5]}></Images>
        </div>
        <div>
          <Images   obj={array[6]}></Images>
        </div>
        <div>
          <Images   obj={array[7]}></Images>
        </div>
        <div>
          <Images   obj={array[8]}></Images>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
