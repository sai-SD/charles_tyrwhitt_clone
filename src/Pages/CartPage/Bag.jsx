import React from "react";
import "./bag.css";
const Bag = ({key, img, price, name }) => {
  return (
    <>
      <div className="item">
        <div className="itemTitle">
          <div className="rmv-btn flex">
            <h3>{name}</h3>
            <button>Remove X</button>
          </div>
          <p>ACK0260NAVL</p>
        </div>
        <div className="itemDetails flex">
          <img className="productImg" src={img}/>
          <div className="moreDetailsContainer">
            <div className="size-price flex b-border">
              <p className="productSize">11-14 inch</p>
              <p className="productPrice">${price}</p>
            </div>
            <div className="gift-offer b-border">
              <div className="productGift">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-US-Site/-/default/dw75bfa36b/images/svg-icons/giftbox.svg" />
                <a href="###">Add a Gift Box ($4.95)</a>
              </div>
              <div className="specialBtn">
                <button className="sp-btn">Last sold 10min ago </button>
              </div>
            </div>
            <div className="quantity-netPrice">
              <label htmlFor="quantity">QUANTITY</label>
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </div>
            <div className="netPriceProduct">$24.23</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bag;
