import React from "react";
import { Home, MoreHoriz, SaveAlt, ShoppingCart, ChatBubble } from "@material-ui/icons";
import commentsolid from "../svg/comment-solid.svg";
import shoppingcartsolid from "../svg/shopping-cart-solid.svg";
import { NavLink } from "react-router-dom";

const BottomNavbar = (prop) => {
  const gohome = () => {
    prop.history.push("/home");
  };
  const gochat = () => {
    prop.history.push("/robby");
  };
  const gocart = () => {
    prop.history.push("/cart");
  };
  const gosave = () => {
    prop.history.push("/save");
  };
  const gomore = () => {
    prop.history.push("/more");
  };
  return (
    <div className="bottomNavbar">
      <NavLink to="/home">
        <Home />
      </NavLink>
      <NavLink to="/robby">
        <ChatBubble />
      </NavLink>
      <NavLink to="/cart">
        <ShoppingCart />
      </NavLink>
      <NavLink to="/save">
        <SaveAlt />
      </NavLink>
      <NavLink to="/more">
        <MoreHoriz />
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
