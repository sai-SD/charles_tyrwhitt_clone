import React,{useState,useEffect} from "react";
import {
  Accordion,
} from "@chakra-ui/react";
import Accord from "./Accord";
import NewAcc from "./NewAcc";
import MenuLogIn from "./MenuLogIn";
import MenuHead from "./MenuHead";
import './Accordion.css'

const Accordions = ({dis,setDis,on}) => {
    // console.log(on);
    let arr = ["SHIRTS","POLOS","SUITS","TROUSERS","KNITWEAR","JACKETS & COATS","SHOES","ACCESSORIES","SALE"]
  return (
<div className={`slide-container ${dis === 1 ? 'slide-visible' : ''}`}>    
  <MenuHead on={() => setDis(0)} home={on}/>
    <Accordion allowToggle>
      {arr.map((item, index) => (
        <Accord key={index} item={item}  />
      ))}
    </Accordion>
    <NewAcc on={() => setDis(0)} home={on}></NewAcc>
    <MenuLogIn on={() => setDis(0)} home={on}></MenuLogIn>
    </div>
  );
};

export default Accordions;
