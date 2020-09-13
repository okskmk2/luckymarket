import React from "react";

const Appbar = (prop) => {
  return (
    <div className="appbar">
      <span className="left">{prop.left}</span>
      <span>{prop.title}</span>
    </div>
  );
};

export default Appbar;
