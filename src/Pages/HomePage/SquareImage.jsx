import React from 'react'
import './SquareImage.css'
const SquareImage = ({obj}) => {
  return (
    <div className='squareImage'>
        <div className="image">
            <img src={obj.img} alt="" />
        </div>
        <h1>{obj.h1}</h1>
        <h3>{obj.h4}</h3>   
    </div>
  )
}

export default SquareImage