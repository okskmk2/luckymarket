import React from "react";
import Appbar from "./Appbar";
import BottomNavbar from "./BottomNavbar";
import { AccountCircle } from "@material-ui/icons";

const cardlist = [
  {
    name: "홍길동",
    startDt: "7월 20일 오후 8시",
    serviceTime: "2시간",
    status: "대기",
  },
  {
    name: "김복희",
    startDt: "7월 20일 오후 8시",
    serviceTime: "2시간",
    status: "예약 진행중",
  },
  {
    name: "크리스티나",
    startDt: "7월 20일 오후 8시",
    serviceTime: "2시간",
    status: "입장",
  },
];

const Robby = (prop) => {
  return (
    <div className="vh">
      <Appbar title="상담 및 예약" />
      <div className="rest">
        {cardlist.map((v) => (
          <div
            className="robby-card"
            style={{ display: "flex", justifyContent: "space-between" , alignItems:'flex-end'}}
          >
            <div>
              <AccountCircle style={{ fontSize: "64" }} />
            </div>
            <div>
              <div className="name">{v.name}</div>
              <div>{v.startDt}</div>
              <div>{v.serviceTime}</div>
            </div>
            <button
              className={
                "robby-btn " +
                (v.status === "대기"
                  ? "red"
                  : v.status === "예약 진행중"
                  ? "yellow"
                  : "green")
              }
            >
              {v.status}
            </button>
          </div>
        ))}
      </div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default Robby;
