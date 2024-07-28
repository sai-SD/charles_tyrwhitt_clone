import React from "react";
import { Link } from "react-router-dom";

const NewAcc = ({on,home}) => {
  const handleOpen =() => {
    on()
    home()
  }
  return (
    <Link to='/signup'><div onClick={()=> handleOpen()} style={{display:"flex",alignItems:"center",background:"#E4E4E4",height:"50px",border:"1px solid white",cursor:"pointer"}}>
      <svg
        className=" icon-create-user"
        style={{ width: "40px", height: "40px",margin:"5px" }}
        viewBox="0 0 48 48"
        aria-hidden="true"
        aria-label
      >
        <path
          fill="#001F49"
          fillRule="evenodd"
          d="M24,23.17a5.89,5.89,0,0,1-5.83-5.94A5.77,5.77,0,0,1,24.1,11.5a5.6,5.6,0,0,1,5.73,5.73A5.89,5.89,0,0,1,24,23.17Zm.1-10.67a4.78,4.78,0,0,0-4.93,4.73,4.83,4.83,0,1,0,9.66,0A4.63,4.63,0,0,0,24.1,12.5Z"
        />
        <path
          fill="#001F49"
          fillRule="evenodd"
          d="M22.94,37c-3.63,0-5.86-.66-7-2.06-1.35-1.69-.77-4.07-.22-6.37.1-.39.2-.79.28-1.18.43-1.92,2.5-4.17,3.74-5.51l.63-.69.74.68-.63.68c-1.1,1.19-3.13,3.4-3.5,5.06-.09.4-.19.8-.28,1.2-.53,2.16-1,4.2,0,5.5S19.9,36.06,23.49,36h1c3.61.06,5.81-.49,6.77-1.69s.55-3.34,0-5.5c-.09-.4-.19-.8-.28-1.2-.36-1.61-2.32-3.84-3.38-5L27,21.79l.75-.67.68.78c1.2,1.36,3.2,3.63,3.61,5.49.08.39.18.79.28,1.18.55,2.3,1.13,4.68-.22,6.37-1.19,1.47-3.59,2.12-7.56,2.06H22.94Z"
        />
        <rect x="38" y="14" width="1" height="9" fill="#001F49" />
        <rect
          x="4"
          y="25"
          width="1"
          height="9"
          transform="rotate(-90 16 7)"
          fill="#001F49"
        />
      </svg>
      <h2 style={{margin:"5px",fontSize:"13px"}}>CREATE AN ACCOUNT</h2>
    </div></Link>
  );
};

export default NewAcc;
