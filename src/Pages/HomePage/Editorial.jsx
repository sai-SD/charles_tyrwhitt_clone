import React from 'react'
import Images2 from './Images2'

const Editorial = () => {
  let editarr = [
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw10d3c97f/merchAssets/SS24/Homepage/Editorial/hp4-ss24-003-m.jpg",
      h1:"Golf Collection",
      h3:"Give your swing some extra power in our slick golf attire.Our range of versatile separates has been designed to effortlessly take you from the course to the clubhouse."
    },
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwec587971/merchAssets/SS24/Homepage/Editorial/hp4-ss24-009-m.jpg",
      h1:"Seasonal Looks",
      h3:"As summer sets in,discover our latest seasonal looks.Whether you're dressing for the commute,a work trip or a weekend away,stay comfy in style."
    },
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7534f7bd/merchAssets/SS24/Homepage/Editorial/hp4-ss24-021-m.jpg",
      h1:"Why we love Linen",
      h3:"Linen is the dream warm weather fabric thanks to its lightweight,breathable and moisture-wicking properties.This summer,keep it breezy."
    },
    {
      img:"https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwad642f3e/merchAssets/SS24/Homepage/Editorial/hp4-ss24-019-m.jpg",
      h1:"Reda x Charles Tyrwhitt",
      h3:"When Tyrwhitt's tailoring expertise joins forces with Reda's exceptional fabrics,you get the finest suits."
    }
  ]
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {
        editarr.map((val,index)=>(
          <Images2 key={index} arr={val} />
        ))
    }
    </div>
  )
}

export default Editorial