import React from "react";
import Appbar from "./Appbar";
import BottomNavbar from "./BottomNavbar";
import pocket from "../img/복주머니.png";
import roof from "../img/빨간지붕.png";

const Cart = (prop) => {
  return (
    <div className="vh">
      <Appbar title="쇼핑" />
      <div className="rest">
        <img src={roof} alt="" style={{ width: "100%" }} />
        <div className="market-row">
          <div className='market-row-left'>
            <img src={pocket} alt="" />
            <span className="qty">x 100</span>
          </div>
          <button className="purple-btn">구매</button>
        </div>
        <div className="market-row">
          <div className='market-row-left'>
            <img src={pocket} alt="" />
            <span className="qty">x 50</span>
          </div>
          <button className="purple-btn">구매</button>
        </div>
        <div className="market-row">
          <div className='market-row-left'>
            <img src={pocket} alt="" />
            <span className="qty">x 30</span>
          </div>
          <button className="purple-btn">구매</button>
        </div>
        <div className="market-row">
          <div className='market-row-left'>
            <img src={pocket} alt="" />
            <span className="qty">x 10</span>
          </div>
          <button className="purple-btn">구매</button>
        </div>
      </div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default Cart;
