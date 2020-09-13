import React from "react";
import Appbar from "./Appbar";
import { AccountCircle, ArrowBack } from "@material-ui/icons";
import Chatinput from "./Chatinput";

const Chat = (prop) => {
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
        title='상담'
      />
      <div className="rest" style={{ margin: "16px" }}>
        <div className="message-card">
          <AccountCircle />
          <div className="message-content">상담페이지 입니다.</div>
        </div>
      </div>
      <Chatinput />
    </div>
  );
};

export default Chat;
