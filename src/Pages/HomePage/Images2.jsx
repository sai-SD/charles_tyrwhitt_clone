import React from "react";
import './Image2.css'

const Images2 = ({arr}) => {
  return (
      <div className="editImage">
        <div className="img-edit">
          <img
            src={arr.img}
            alt=""
          />
        </div>
        <h1>{arr.h1}</h1>
        <h3>{arr.h3}</h3>
        <p><u>Discover More</u></p>
      </div>
  );
};

export default Images2;
