import React from 'react'
import './NavView.css'

const NavView = ({show,setShow}) => {
    // console.log(show);
  return (
    <>
    <div onMouseEnter={() => setShow(show)} onMouseLeave={() => setShow('')} className={` ${(show == 'shirts' || show == 'pants' || show == 'shoes' || show == 'jackets' || show == 'acc' || show == 'sweaters'|| show == 'suits') ? 'see' : 'notsee'}`}>
        <div id="shirtsInfo" className={`dInfo ${show === 'shirts' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw9d168f4e/tn-ss23-001.jpg#cm_sp=TN-new-shirts" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw53e8d1e4/tn-ss23-002.jpg#cm_sp=TN-polos" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw752743f9/tn-aw22-035.jpg#cm_sp=TN-accessories_belts" alt="" />
            </div>
                <div>
                    <b>STYLE </b>
                    <p>DRESS</p>
                    <p>CASUAL</p>
                    <p>CUSTOM SHIRTS</p>
                    <p>NON-IRON</p>
                    <p>LUXURY</p>
                    <p>TUXEDO</p>
                    <p>SHORT SLEEVE</p>
                    <p>COLLARLESS</p>
                    <p>POLOS</p>
                    <p>T-SHIRS</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>SHIRTS</p>
                </div>
                <div>
                    <b>COLOR </b>
                    <p>WHITE</p>
                    <p>PINK</p>
                    <p>PATTERN</p>
                    <p>LIBERTY PRINT</p>
                    <p>CHECK</p>
                    <p>STRIPE</p>
                    <p>VIEW ALL</p>
                    <br />
    
                    <b>FIT</b>
                    <p>CLASSIC</p>
                    <p>SLIM</p>
                    <p>EXTRA SUM</p>
                    
    
                </div>
                <div>
                    <b>FABRIC</b>
                    <p>OXFORD</p>
                    <p>POPLIN</p>
                    <p>LINEN</p>
                    <p>TWILL</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>INSPIRATION</b>
                    <p>NEW YOURKJETS</p>
                    <p>FULHAM FC</p>
                    <p>SEASONAL LOOKS</p>
                    <p>EDITORIAL</p>
                    <p>ABOUT US</p>
                </div>
        </div>
        <div id="suitsInfo" className={`dInfo ${show == 'suits' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwdd7dd88d/tn-ss23-004.jpg#cm_sp=TN-suits_new_season" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw1ce69c52/tn-ss23-005.jpg#cm_sp=TN-suits_business" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw83b98a47/tn-ss23-006.jpg#cm_sp=TN-blazers" alt="" />
            </div>
            <div>
                <b>OCCASSION</b>
                <p>BUSINESS</p>
                <p>WEDDING</p>
                <p>BLACK TIE</p>
                <p>RACES</p>
                <p>VIEW ALL</p>
            </div>
            <div>
                <b>COLOR</b>
                <p>NAVY BLUE</p>
                <p>BLACK SUITES</p>
                <p>GREY SUITS</p>
                <p>VIEW ALL</p>
                <br />
                <b>FIT</b>
                <p>SUM FIT SUITS</p>
                <p>CLASSIC FIT SUITS</p>
                <p>VIEW ALL</p>
            </div>
            <div>
                <b>SUIT SEPRATES</b>
                <p>SUIT JACKETS</p>
                <p>SUIT PANTS</p>
                <p>VIEWS</p>
                <p>BLAZERS & SMART JACKETS</p>
                <br />
                <b>CLEARANCE</b>
                <p>SUITS</p>
            </div>
            <div>
                <b>STYLE</b>
                <p>TUXEDOZ</p>
                <p>MORNING SUITS</p>
                <p>ITALIN SUITS</p>
                <p>VIEW ALL</p>
                <br />
                <b>INSPIRATION</b>
                <p>NEW YOURKJETS</p>
                <p>FUHAMA PC</p>
                <p>SEASONAL LOOKS</p>
                <p>EDITORIAL</p>
                <p>ABOUT US
                </p>
            </div>
        </div>
        <div id="pantsInfo" className={`dInfo ${show == 'pants' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwd29c2a89/tn-ss23-007.jpg#cm_sp=TN-trousers-new-season" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwc08a472d/tn-aw22-002.jpg#cm_sp=TN-trousers-chinos" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwbf969345/tn-ss23-024.jpg#cm_sp=TN-Trousers-smart-trousers" alt="" />
            </div>
                <div>
                    <b>STYLE </b>
                    <p>DRESS</p>
                    <p>CASUAL</p>
                    <p>CUSTOM SHIRTS</p>
                    <p>NON-IRON</p>
                    <p>LUXURY</p>
                    <p>TUXEDO</p>
                    <p>SHORT SLEEVE</p>
                    <p>COLLARLESS</p>
                    <p>POLOS</p>
                    <p>T-SHIRS</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>SHIRTS</p>
                </div>
                <div>
                    <b>COLOR </b>
                    <p>WHITE</p>
                    <p>PINK</p>
                    <p>PATTERN</p>
                    <p>LIBERTY PRINT</p>
                    <p>CHECK</p>
                    <p>STRIPE</p>
                    <p>VIEW ALL</p>
                    <br />
    
                    <b>FIT</b>
                    <p>CLASSIC</p>
                    <p>SLIM</p>
                    <p>EXTRA SUM</p>
                    
    
                </div>
                <div>
                    <b>FABRIC</b>
                    <p>OXFORD</p>
                    <p>POPLIN</p>
                    <p>LINEN</p>
                    <p>TWILL</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>INSPIRATION</b>
                    <p>NEW YOURKJETS</p>
                    <p>FULHAM FC</p>
                    <p>SEASONAL LOOKS</p>
                    <p>EDITORIAL</p>
                    <p>ABOUT US</p>
                </div>
        </div>
        <div id="sweatersInfo" className={`dInfo ${show == 'sweaters' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw055705ac/tn-ss23-008.jpg#cm_sp=TN-knitwear-new-season" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw2dde8d44/tn-ss23-009.jpg#cm_sp=TN-knitwear-zip-neck" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw1db4d68e/tn-ss23-010.jpg#cm_sp=TN-knitwear-jumpers" alt="" />
            </div>
                <div>
                    <b>STYLE </b>
                    <p>DRESS</p>
                    <p>CASUAL</p>
                    <p>CUSTOM SHIRTS</p>
                    <p>NON-IRON</p>
                    <p>LUXURY</p>
                    <p>TUXEDO</p>
                    <p>SHORT SLEEVE</p>
                    <p>COLLARLESS</p>
                    <p>POLOS</p>
                    <p>T-SHIRS</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>SHIRTS</p>
                </div>
                <div>
                    <b>COLOR </b>
                    <p>WHITE</p>
                    <p>PINK</p>
                    <p>PATTERN</p>
                    <p>LIBERTY PRINT</p>
                    <p>CHECK</p>
                    <p>STRIPE</p>
                    <p>VIEW ALL</p>
                    <br />
    
                    <b>FIT</b>
                    <p>CLASSIC</p>
                    <p>SLIM</p>
                    <p>EXTRA SUM</p>
                    
    
                </div>
                <div>
                    <b>FABRIC</b>
                    <p>OXFORD</p>
                    <p>POPLIN</p>
                    <p>LINEN</p>
                    <p>TWILL</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>INSPIRATION</b>
                    <p>NEW YOURKJETS</p>
                    <p>FULHAM FC</p>
                    <p>SEASONAL LOOKS</p>
                    <p>EDITORIAL</p>
                    <p>ABOUT US</p>
                </div>
        </div>
        <div id="jacketsInfo" className={`dInfo ${show == 'jackets' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw6b41f18f/tn-ss23-011.jpg#cm_sp=TN-outerwear_new_season" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwa092db49/tn-ss23-012.jpg#cm_sp=TN-outerwear_coats" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwa768efcf/tn-aw22-041.jpg#cm_sp=TN-outerwear_gilet" alt="" />
            </div>
                <div>
                    <b>STYLE </b>
                    <p>DRESS</p>
                    <p>CASUAL</p>
                    <p>CUSTOM SHIRTS</p>
                    <p>NON-IRON</p>
                    <p>LUXURY</p>
                    <p>TUXEDO</p>
                    <p>SHORT SLEEVE</p>
                    <p>COLLARLESS</p>
                    <p>POLOS</p>
                    <p>T-SHIRS</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>SHIRTS</p>
                </div>
                <div>
                    <b>COLOR </b>
                    <p>WHITE</p>
                    <p>PINK</p>
                    <p>PATTERN</p>
                    <p>LIBERTY PRINT</p>
                    <p>CHECK</p>
                    <p>STRIPE</p>
                    <p>VIEW ALL</p>
                    <br />
    
                    <b>FIT</b>
                    <p>CLASSIC</p>
                    <p>SLIM</p>
                    <p>EXTRA SUM</p>
                    
    
                </div>
                <div>
                    <b>FABRIC</b>
                    <p>OXFORD</p>
                    <p>POPLIN</p>
                    <p>LINEN</p>
                    <p>TWILL</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>INSPIRATION</b>
                    <p>NEW YOURKJETS</p>
                    <p>FULHAM FC</p>
                    <p>SEASONAL LOOKS</p>
                    <p>EDITORIAL</p>
                    <p>ABOUT US</p>
                </div>
        </div>
        <div id="shoesInfo" className={`dInfo ${show == 'shoes' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw0e07f559/tn-ss23-023.jpg#cm_sp=TN-shoes" alt="" />
                
            </div>
                <div>
                    <b>CATAGORY </b>
                    <p>NEW CHOES</p>
                    <p>LOAFERS</p>
                    <p>BOOTS</p>
                    <p>SNEAKERS</p>
                    <p>BOAT SHOES</p>
                    <p>VIEW ALL</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>SHOES</p>
                </div>
                <div>
                    <b>INSPIRATION </b>
                    <p>EDITORIAL</p>
                    <p>SMART SHOE GUIDE</p>
                    <br />
    
                    <b>SHOES ACCESSORIES</b>
                    <p>SOCKS</p>
                    <p>SHOE CARE</p>
                </div>
               
        </div>
        <div id="accsInfo" className={`dInfo ${show == 'acc' ? 'see' : 'notsee'}`}> 
            <div className="secNavImg">
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwbdbbefb5/tn-ss23-017.jpg#cm_sp=TN-accessories_newAccessories" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dwbee3ed15/tn-ss23-018.jpg#cm_sp=TN-accessories_ties" alt="" />
                <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Sites-ctshirts-site-us/default/dw57380990/tn-ss23-016.jpg#cm_sp=TN-accessories_socks" alt="" />
            </div>
                <div>
                    <b>CATAGORY </b>
                    <p>TIES & OW-TIES</p>
                    <p>SHIRTS ACCESSORIES</p>
                    <p>POCKECT SQUARES</p>
                    <p>SOCKS</p>
                    <p>BELTS & SUSPRENDERS</p>
                    <p>GLOVERS & SCARVES</p>
                    <p>LOUNGEWEAR</p>
                    <p>T-SHIRTS</p>
                    <p>UMBRELLA</p>
                    <p>UNDERWEAR</p>
                    <p>VIEW </p>
                </div>
                <div>
                    <b>INSPIRATION</b>
                    <p>EDITORIAL</p>
                    <p>ABOUT US</p>
                    <br />
                    <b>FEATURES</b>
                    <p>GIFT CERTIFIED</p>
                    <br />
                    <b>CLEARANCE</b>
                    <p>ACCESSORIES</p>
                    
    
                </div>
                
        </div>
    </div>
        </>
    // </div>
  )
}

export default NavView