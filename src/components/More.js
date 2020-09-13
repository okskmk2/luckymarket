import React from "react";
import Appbar from "./Appbar";
import BottomNavbar from "./BottomNavbar";

const More = (prop) => {
  return (
    <div className="vh">
      <Appbar title='설정'/>
      <div className="rest"></div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default More;
