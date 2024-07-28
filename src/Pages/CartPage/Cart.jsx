import React, { useState, useEffect } from "react";
import Bag from "./Bag";
import "../../App.css";
const Cart = ({ count }) => {
  const [cart, setCart] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:3000/cart");
    let fetchedData = await res.json();
    setCart(fetchedData);
    // setLast(fetchedData.last)
    console.log(fetchedData);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={`${count === 1 ? "slide-invisible" : "slide-visible"}`}>
      <header className="mainHeading flex">
        <div className="leftHeading">
          <h1>BAG</h1>
        </div>
        <div className="rightHeading flex">
          <img src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw15fad815/images/svg-icons/padlock.svg" />
          <p>
            Shopping is secure <br className="d-none" /> with Charles Tyrwhitt.
          </p>
        </div>
      </header>
      <div className="mainCartArea">
        <div className="cartItemsContainer">
          <div className="itemStat">
            <hr
              className="cart-header__row cart-header__row--divider"
              aria-hidden="true"
            />
            <h2>YOUR ITEMS </h2>
          </div>
          <div className="cartItems">
            {cart.map((item, index) => (
              <Bag
                key={index}
                img={item.img}
                price={item.price}
                name={item.name}
              ></Bag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
