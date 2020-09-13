import React from "react";
import { Check } from "@material-ui/icons";

const Chatinput = () => {
  return (
    <div className="chatinput">
      <input
        type="text"
        style={{
          border: "1px solid #aaa",
          borderRadius: "4px",
          width: "calc(100% - 28px)",
          boxSizing: "border-box",
          marginRight: "4px",
        }}
      />
      <Check />
    </div>
  );
};

export default Chatinput;
