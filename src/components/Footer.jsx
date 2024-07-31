import React from "react";
import "./footer.css";
import "../App.css";

const Footer = ({count}) => {
  return (
    <>
      <footer className={`footer ${count === 1 ? 'slide-notvisible' : 'slide-visiblee'}`}>
        <div className="full-bar">
          <div className="fullBarContainer">
            <span className="fullBarText">
              We will keep you posted on new products and great offers
            </span>
            <div className="fullBarInputBox">
              <input type="email" placeholder="  Email Address" />
              <button className="gThan">&gt;</button>
            </div>
          </div>
        </div>
        <div className="main-area">
          <nav className="footer-nav bottom-border">
            <div className="col-nav">
              <div className="item-menu">
                <h2 className="list-title">HELP</h2>
                <ul>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">FAQs</a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">SHIPPING</a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">RETURNS </a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">SIZE GUIDES </a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">
                      SHIRT MULTIBUY{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">FIND A STORE </a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">CONTACT US </a>
                  </li>
                  <li>
                    <a href="https://ctshirts-us.custhelpcom">
                      WHERE IS MY ORDER?
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-nav">
              <div className="item-menu">
                <h2 className="list-title">LEGAL</h2>
                <ul>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      TERMS AND CONDITIONS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      PRIVACY POLICY
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      OUR COOKIE POLICY
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      ACCESSIBILITY POLICY
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      ETHICAL TRADING POLICY
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      MODERN SLAVERY STATEMENT
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/terms-and-conditions.html">
                      INCLUSIVE WORKING STATEMENT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-nav">
              <div className="item-menu">
                <h2 className="list-title">MORE INFO</h2>
                <ul>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      CUSTOM SHIRTS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      GIFT VOUCHERS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      AFFILIATE PROGRAMME
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      WHOLESALE PARTNERSHIPS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      REQUEST A CATALOGUE
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.com/us/about-us.html">
                      DOING THINGS PROPERLY
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-nav">
              <div className="item-menu">
                <h2 className="list-title">CAREERS</h2>
                <ul>
                  <li>
                    <a href="https://www.charlestyrwhitt.careers/jobs">
                      UK VACANCIES
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.careers/jobs">
                      US VACANCIES
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.careers/jobs">
                      OUR BELIEFS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.careers/jobs">
                      OUR BENIFITS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.charlestyrwhitt.careers/jobs">
                      OUR PEOPLE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-media-logo">
                <ul>
                  <li>
                    <a href="http://en-gb.facebook.com/CharlesTyrwhitt">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="http://instagram.com/charlestyrwhitt">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/ctshirts">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="payment-container bottom-border">
            <div className="lock-text-box">
              <span className="icon-padlock">
                Shopping is secure with Charles Tyrwhitt.
              </span>
            </div>
            <div className="payment-box">
              <span className="payment-box-info">We Accept:</span>
              <ul>
                <li>
                  <img
                    width="50" height="31" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg"
                  />
                </li>
                <li>
                  <img 
                    width="50" height="50" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb708a05a/images/payment_methods/basket_amex.svg"
                  />
                </li>
                <li>
                  <img
                    width="50"
                    height="35"
                    data-src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
                    alt="Mastercard accepted"
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
                  />
                </li>
                <li>
                  <img
                    width="50"
                    height="12"
                    data-src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                    alt="Paypal accepted"
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                  />
                </li>
                <li>
                  <img
                    width="50"
                    height="32"
                    data-src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f3fbf38/images/payment_methods/basket_apple_pay.svg"
                    alt="Apple Pay accepted"
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f3fbf38/images/payment_methods/basket_apple_pay.svg"
                  />
                </li>
                <li>
                  <img
                    width="50"
                    height="32"
                    data-src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw862ab47a/images/payment_methods/google_pay.svg"
                    alt="Google Pay accepted"
                    src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw862ab47a/images/payment_methods/google_pay.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="sponser-container bottom-border">
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw6f1c65ad/images/awards/us-footer.png"
            />
          </div>
          <div className="certification">
            <div className="ltd-info">
              <p>© 2024 Charles Tyrwhitt Shirts Ltd.</p>
              <p>All products are imported into the US.</p>
              <p>USDEFAULT</p>
              <p>CHANGE COUNTRY &gt;</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
