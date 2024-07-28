import React from 'react'
import { Image } from '@chakra-ui/react'
import './Images.css'

const Images = ({obj}) => {
  // console.log(obj);
  return (
    <div className="hov" style={{margin:"8vw 2vw"}}>
        <Image
          borderRadius="full"
          boxSize="20vw"
          src={obj.img}
          alt="Dan Abramov"
        />
        <h1 style={{textAlign:"center",fontSize:"2.5vw",fontWeight:"500"}}>{obj.name}</h1>
    </div>
  )
}

export default Images