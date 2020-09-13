import React from "react";
import Appbar from "./Appbar";
import { AccountCircle, ArrowBack } from "@material-ui/icons";
import Chatinput from "./Chatinput";

const Rev = (prop) => {
  const goback = () => {
    prop.history.go(-1);
  };

  return (
    <div className="vh">
      <Appbar
        left={
          <span onClick={goback}>
            <ArrowBack />
          </span>
        }
        title='예약'
      />
      <div className="rest" style={{ margin: "16px" }}>
        <div className="message-card">
          <AccountCircle />
          <div className="message-content">예약페이지 입니다.</div>
        </div>
      </div>
      <Chatinput />
    </div>
  );
};

export default Rev;
