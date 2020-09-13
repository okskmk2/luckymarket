import React from "react";
import Appbar from "./Appbar";
import BottomNavbar from "./BottomNavbar";
import { AccountCircle } from "@material-ui/icons";

const tempReply = [
  {
    name: "고라니",
    userid: "ek***",
    content: "이별 후에 힘들었는데 재회운 봐주셨어요! 꼭 들어맞길...",
  },
  { name: "토끼", userid: "ra***", content: "새벽에도 성심 성의껏 봐주시고.." },
  { name: "거북이", userid: "t3***", content: "감사합니다. 기운이 났어요" },
];

const CardDetail = (prop) => {
  const gochat = () => {
    prop.history.push("/chat");
  };
  const goRev = () => {
    prop.history.push("/rev");
  };

  return (
    <div className="vh">
      <div className="rest">
        <div style={{ position: "relative" }}>
          <div className="cover"></div>
          <div className="cover-content">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button style={{ color: "white" }}>EDIT</button>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <AccountCircle style={{ fontSize: "62px" }} />
                <div style={{ marginLeft: "32px" }}>
                  <div>술사명</div>
                  <div style={{ fontSize: "12px", marginTop: "8px" }}>
                    복채 : 30분 30복채
                  </div>
                </div>
              </div>
              <div style={{ margin: "16px 0" }}>
                여기에는 술사의 간단한 소개가 들어갑니다. 최대 5줄을 넘지
                않습니다.
              </div>
              <div
                style={{
                  color: "gray",
                }}
              >
                #작명 #택일
              </div>
            </div>
          </div>
        </div>
        <div className="card-detail-review">
          <div>REVIEW</div>
          {tempReply.map((v) => (
            <div style={{ margin: "16px 0" }}>
              <div>
                {v.name}({v.userid})
              </div>
              <div>{v.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          style={{
            padding: "8px 24px",
            fontSize: "24px",
            borderRadius: "12px",
            backgroundColor: "#844685",
            color: "white",
          }}
          onClick={gochat}
        >
          입장
        </button>
        <button
          onClick={goRev}
          style={{
            padding: "8px 24px",
            fontSize: "24px",
            borderRadius: "12px",
            boxShadow: "1px 1px 1px 1px #ddd",
          }}
        >
          예약
        </button>
      </div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default CardDetail;
