import React from "react";
import Appbar from "./Appbar";
import { Search, AccountCircle } from "@material-ui/icons";
import BottomNavbar from "./BottomNavbar";

const user2list = [
  {
    name: "김복희",
    star: 4,
    desc: "30분에 50복채",
    tags: ["궁합", "택일", "연인"],
  },
  {
    name: "구름도사",
    star: 4,
    desc: "30분에 50복채",
    tags: ["궁합", "재회전문"],
  },
  {
    name: "엘린",
    star: 4,
    desc: "30분에 50복채",
    tags: ["궁합"],
  },
  {
    name: "프시케",
    star: 4,
    desc: "30분에 50복채",
    tags: ["궁합", "택일", "연인"],
  },
];

const Home = (prop) => {
  const goCardDetail = () => {
    prop.history.push("/carddetail");
  };

  return (
    <div className="vh">
      <Appbar title="홈" />
      <div className="rest">
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <div style={{ display: "inline-flex" }}>
            <input className='home-search-input' placeholder="술사님 아이디, 키워드 검색" />
            <button>
              <Search />
            </button>
          </div>
        </div>
        {user2list.map((v) => (
          <div
            onClick={goCardDetail}
            className="home-card"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <div className="name">{v.name}</div>
              <span>{v.star}</span>
              <span>{v.desc}</span>
              <div>
                {v.tags.map((t) => (
                  <span className="tag">#{t}</span>
                ))}
              </div>
            </div>
            <div>
              <AccountCircle style={{ fontSize: "64" }} />
            </div>
          </div>
        ))}
      </div>
      <BottomNavbar {...prop} />
    </div>
  );
};

export default Home;
