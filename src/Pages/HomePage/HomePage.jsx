import React from "react";
import Slider from "./Slider";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import Images from "./Images";
import SquareImage from "./SquareImage";
import Editorial from "./Editorial";
import SliderHome from "./SliderHome";

const HomePage = () => {
  let arr=[
    {img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw4a3ed711/merchAssets/SS24/Homepage/Mobile-carousel/mobile-shirts.jpg",name:"Shirts"},
    {img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw146b1f75/merchAssets/SS24/Homepage/Mobile-carousel/polo-mobile.jpg",name:"Polos"},
    {img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw9d6b4d91/merchAssets/SS24/Homepage/Mobile-carousel/suits-mobile.jpg",name:"Suits"},
    {img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Trousers"},
    {img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Accessories"},{img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Knitwears"},{img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Pants"},{img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Shoes"},{img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw19e2af8c/merchAssets/SS24/Homepage/Mobile-carousel/trousers-mobile.jpg",name:"Jackets"}
  ]
  let slidearr=[
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwfb8ff762/merchAssets/SS24/Homepage/HPC/hc-070.jpg",h1:"FORMAL SHIRTS",h4:"4 FOR $199,SAVE $140"
    },
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwae97ea7d/merchAssets/SS24/Homepage/HPC/hc-045-m.jpg",h1:"TROUSERS & SHORTS",h4:"BUY 2,SAVE $20"
    },
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw1ca08289/merchAssets/SS24/Homepage/HPC/hc-044-m.jpg",h1:"LINEN SHIRTS",h4:"4 FOR $199,SAVE $140"
    },{
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw360c68e6/merchAssets/SS24/Homepage/HPC/hc-053-m.jpg",h1:"POLOS",h4:"4 FOR $199,SAVE $140"
    },
    {
       img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw836ab8cb/merchAssets/SS24/Homepage/HPC/hc-054-m.jpg",h1:"BLAZERS",h4:"SPREZZATURA STYLE"
    },
    {
       img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb9bd84ba/merchAssets/SS24/Homepage/HPC/hc-057-m.jpg",h1:"SHOES",h4:"WALKING ON SUNSHINE"
    }
  ]
  return (
    <>
      <div className="container">
        <img className="img" src="EOSS_mobile_UK.jpg" alt="" />
        <video loop autoPlay>
          <source src="video-home.mp4" type="video/mp4"></source>
        </video>
        <div className="overlay-text">
          <h1 className="text-one">UP TO 60% OFF</h1>
          <h1 className="text-two">Shirts from €29.95</h1>
          <Link to="/product">
            <button className="btn">SHOP SALE SHIRTS</button>
          </Link>
          <button className="btn">SHOP ALL SALE</button>
        </div>
      </div>

      <div className="carousel" >
        <Slider array={arr}></Slider>
      </div>
      <div id="squareImage">
        {
          slidearr.map((slide,index) => (
            <SquareImage key={index} obj={slide} />
          ))
        }
      </div>
      <div id="slide-squareImage">
      <SliderHome slide={slidearr} ></SliderHome>
      </div>
      <div className="wedding">
        <img
          className="img-one"
          src="https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwf898eadf/merchAssets/SS24/Homepage/HP3/hp3-summer-wedding-desktop.jpg?sw=1440"
          alt=""
        />
        <img
          className="img-two"
          src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7896d021/merchAssets/SS24/Homepage/HP3/hp3-summer-wedding-mobile.jpg"
          alt=""
        />
        <div className="wedoverlay-text">
          <h1 className="wedtext-one">Summer Weddings</h1>
          <p className="wedtext-two">
            Dress up in timeless tailoring with contemporary flair - think
            pastel shirts and accessories, and suits in fresh colours beyond
            black.
          </p>
          <button className="button">EXPLORE MORE</button>
        </div>
      </div>
      <div className="editorial">
        <div className="edit-head">
          <div className="head1">EDITORIAL</div>
          <div className="head2">View Collection</div>
        </div>
        <Editorial></Editorial>
      </div>
    </>
  );
};

export default HomePage;
