import React from "react";
import BottomNavbar from "./BottomNavbar";
import { AccountCircle } from "@material-ui/icons";
import pocket from "../img/복주머니.png";
import { Scrollbars } from "react-custom-scrollbars";

const markedTeller = [
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
  {
    imgUrl: "",
    name: "술사이름",
    desc: "30분 | 30복채",
    status: "ON",
  },
];

const archivedFortune = [
  {
    imgUrl: "",
    name: "술사이름",
    status: "active",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "expired",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "active",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "active",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "active",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "expired",
    archivedDt: "2020년 3월 21일",
  },
  {
    imgUrl: "",
    name: "술사이름",
    status: "active",
    archivedDt: "2020년 3월 21일",
  },
];

const Save = (prop) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const getTabContainer = (index) => {
    let comp = null;
    switch (index) {
      case 0:
        comp = (
          <div>
            <div className="save-desc">
              관심술사는 최대 20명까지 보관할 수 있습니다.
            </div>
            {markedTeller.map((v) => (
              <div
                className="robby-card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <AccountCircle style={{ fontSize: "64" }} />
                </div>
                <div>
                  <div className="name">{v.name}</div>
                  <div className="line-center">
                    <img src={pocket} />
                    {v.desc}
                  </div>
                </div>
                <button className="save-purple-btn">바로가기</button>
              </div>
            ))}
          </div>
        );
        break;
      case 1:
        comp = (
          <div>
            <div className="save-desc">
              지난 점괘는 1년간 보관됩니다. (단, 유료 보관은 영구 보관됩니다.)
            </div>
            {archivedFortune.map((v) => (
              <div
                className="robby-card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <AccountCircle style={{ fontSize: "64" }} />
                </div>
                <div>
                  <div className="name">{v.name}</div>
                  <div>{v.archivedDt}</div>
                </div>
                <div>
                  <button className="save-card-top-btn">
                    {v.status === "active" ? "점괘보기" : "보기만료"}
                  </button>
                  <button className="save-card-bottom-btn">리뷰쓰기</button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        break;
    }
    return comp;
  };

  return (
    <div className="vh">
      <div className="tab-btn-group">
        <button
          className={"tab-btn " + (tabIndex === 0 ? "active" : "")}
          onClick={() => {
            setTabIndex(0);
          }}
        >
          관심술사
        </button>
        <button
          className={"tab-btn " + (tabIndex === 1 ? "active" : "")}
          onClick={() => {
            setTabIndex(1);
          }}
        >
          지난 점괘
        </button>
      </div>
      <div className="rest">
        <Scrollbars>{getTabContainer(tabIndex)}</Scrollbars>
      </div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default Save;
