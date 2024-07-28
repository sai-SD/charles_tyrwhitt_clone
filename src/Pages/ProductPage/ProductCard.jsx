import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ img, name, price, id }) => {
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [prod, setProd] = useState({
    id: "",
    img: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    setProd({ id, img, name, price });
  }, [id, img, name, price]);

  async function postData() {
    let pFound = 0;
    const res = await fetch("http://localhost:3000/cart");
    const products = await res.json();
    for (let prod of products) {
      if (prod.id === id) {
        pFound = 1;
        break;
      }
    }
    if (pFound === 1) {
      setError("Already In The Cart");
      return;
    }

    let postRes = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod),
    });
    let data = await postRes.json();
    // console.log(data);
    setError("");
    alert("added Succesfully");
    // navigate('/')
  }

  const handleError = () => {
    setError("");
  };
  return (
    <div className="card" onMouseLeave={handleError}>
      <div className="prod">
        <div onClick={() => nav(`/product/${id}`)}>
          <img loading="lazy" src={img} alt="" />
          <h1>{name}</h1>
          <h4>${price}</h4>
        </div>
        <button className="prod-button" onClick={postData}>
          ADD TO BAG
        </button>
        {error && <div id="Found">{error}</div>}
      </div>
    </div>
  );
};

export default ProductCard;
