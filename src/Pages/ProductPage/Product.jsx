import React from "react";
import ProductPage from "./ProductPage";

const Product = ({count}) => {
  return (
    <div>
      <div className={`${count === 1 ? "slide-notvisible" : "slide-visiblee"}`}>
        <ProductPage></ProductPage>
      </div>
    </div>
  );
};

export default Product;
