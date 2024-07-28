import React,{useState} from "react";
import "./ProductPage.css";
import IndividualProduct from "./IndividualProduct";

const ProductPage = () => {
  const [sort, setSort] = useState('')
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
    <div className="product">
      <div className="product-head">
        <h1>PRODUCT</h1>
        <p>
          Comfortable fabrics and flattering fits? Expect both from our formal
          and casual men's trousers. Our chinos are bestsellers for good reason
          – they feature non-iron finishes, super-soft textures, and slight
          stretch for comfort. To complete business looks, choose 5-pocket men's
          jeans in versatile shades of charcoal, navy, and oatmeal.
        </p>
        <div className="product-btn">
          <div className="pbtn">5 POCKET JEANS</div>
          <div className="pbtn">SUIT TROUSERS</div>
          <div className="pbtn">BLACK TROUSERS</div>
        </div>
      </div>
      <div className="pimg">
        <img
          src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw85cf41c8/merchAssets/SS24/TIBs/ss24-tib-038.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="prod-main">
    <div className="sort">
        <select  name="SORT BY" id="" onChange={handleChange}>
        <option value="">SORT </option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="-name">Name: Z to A</option>
        </select>
        <select  name="FILTER" id="" onChange={handleChange}>
        <option value="">FILTER</option>
          <option value="rating">Rating: Low to High</option>
          <option value="-rating">Rating: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="-name">Name: Z to A</option>
        </select>
    </div>
    <div className="ind-prod">
    <IndividualProduct sort={sort}></IndividualProduct>
    </div>
    </div>
    </div>
  );
};

export default ProductPage;
