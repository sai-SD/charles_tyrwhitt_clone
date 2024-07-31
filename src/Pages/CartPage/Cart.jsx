import React, { useState, useEffect } from "react";
import Bag from "./Bag";
import "../../App.css";
import "./bag.css";
const Cart = ({ count }) => {
  const [cart, setCart] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:3000/cart");
    let fetchedData = await res.json();
    setCart(fetchedData);
    console.log(fetchedData);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={`${count === 1 ? "slide-notvisible" : "slide-visiblee"}`}>
      <header className="mainHeading flex">
        <div className="leftHeading">
          <h1>BAG </h1>
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
            <hr class="h-rule" aria-hidden="true" />
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
        <div className="offerPaymentContainer flex-c">
            <div className="offerPaymentHeading">ORDER SUMMARY</div>
            <div className="offerConrainer op">
              <div className="offerCode b-border">
                <p>OFFER CODE</p>
              </div>
              <div className="haveOffer">+ Have an offer code ?</div>
            </div>
            <div className="paymentContainer op">
              <div className="total b-border">
                <p>TOTAL</p>
              </div>
              <div className="finalPay flex">
                <div className="bagTotal f12px">BAG TOTAL</div>
                <div className="bagTotalValue">$1,222.00</div>
              </div>
              <div className="shippingTrack flex">
                <div className="shipHead f12px">PREMIUM TRACKED SHIPPING</div>
                <div className="bagTotalValue">$17.95</div>
              </div>
              <div className="f12px">
                Other shipping options available in checkout
              </div>
              <div className="amount flex">
                <div className="toPay">TO PAY</div>
                <div className="totalPrice">$1239.95</div>
              </div>
              <button className="checkOutBtn cartBtn">SECURE CHECKOUT</button>
              <button className="payBtn cartBtn">
                PAY WITH{" "}
                <img
                  class="payBtn-payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                />
              </button>
              <div className="acceptPayment">We accept:</div>
              <div class="payRow">
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
                />
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg"
                />
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                />
              </div>
              <div class="payRow">
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb708a05a/images/payment_methods/basket_amex.svg"
                />
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f3fbf38/images/payment_methods/basket_apple_pay.svg"
                />
                <img
                  class="payMode"
                  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw862ab47a/images/payment_methods/google_pay.svg"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
