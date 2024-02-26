import React, { useState, useEffect } from "react";
import "../scss/buildingPage.scss";
import bd from "../images/bd.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TollIcon from "@mui/icons-material/Toll";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TodayIcon from "@mui/icons-material/Today";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import va from "../images/va.jpg";
import vb from "../images/vb.jpg";
import vc from "../images/vc.jpg";
import vd from "../images/vd.jpg";
import ve from "../images/ve.jpg";
import vf from "../images/vf.jpg";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function BuildingPage() {
  const [status, setStatus] = useState("buy");
  const [villas, setVillas] = useState([
    {
      src: va,
      name: "hai",
      amt: "QAR 6500",
      text: "1 Bedroom Fully Furnished Apartment at Aamal Tower",
      rating: "4.5",
    },
    {
      src: vb,
      name: "hai",
      amt: "QAR 7500",
      text: "1 Bedroom Semi-Furnished Apartment at Aamal Tower",
      rating: "4.8",
    },
    {
      src: vc,
      name: "hai",
      amt: "QAR 6000",
      text: "2 Bedroom Fully-Furnished Apartment at Aamal Tower",
      rating: "4.2",
    },
    {
      src: vd,
      name: "hai",
      amt: "QAR 6580",
      text: " 3 Bedroom Semi-Furnished Apartment at Aamal Tower",
      rating: "4.7",
    },
    {
      src: ve,
      name: "hai",
      amt: "QAR 6800",
      text: "2 Bedroom Fully-furnished Apartment at Al Areen Tower",
      rating: "4.8",
    },
    {
      src: vf,
      name: "hai",
      amt: "QAR 3500",
      text: "3 Bedroom Semi-Furnished Apartment with Balcony",
      rating: "4.1",
    },
  ]);
  const [headStatus, setHeadStatus] = useState("buy");
  const [bodyStatus, setBodyStatus] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div id="buildingPage">
      <div className="header">
        <div className="leftHead">
          <div className="logoDiv">
            <img alt="log" className="logoImg" src={bd} />
          </div>
        </div>
        <div className="centerHead">
          <div
            className={`buyDiv ${headStatus}`}
            onClick={() => {
              setHeadStatus("buy");
            }}
          >
            Buy
            {headStatus === "buy" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )}
          </div>
          <div
            className={`rentDiv ${headStatus}`}
            onClick={() => {
              setHeadStatus("rent");
            }}
          >
            Rent{" "}
            {headStatus === "rent" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )}
          </div>
          <div
            className={`sellDiv ${headStatus}`}
            onClick={() => {
              setHeadStatus("sell");
            }}
          >
            Sell{" "}
            {headStatus === "sell" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )}
          </div>
          <div className="searchDiv">
            <SearchIcon id="searchIcon" />
            <input type="text" className="searchInp" placeholder="search" />
          </div>
        </div>
        <div className="rightHead">
          <div className="nameDiv">Hari Yadharth</div>
          <div className="accDiv">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="leftBody">
          <div className="upDiv">
            <div
              className={`homeDiv ${bodyStatus}`}
              onClick={() => {
                setBodyStatus("home");
              }}
            >
              <HomeIcon id="homeIcon" />
            </div>
            <div
              className={`notifyDiv ${bodyStatus}`}
              onClick={() => {
                setBodyStatus("notify");
              }}
            >
              <NotificationsIcon id="notifyIcon" />
            </div>
            <div
              className={`todayDiv ${bodyStatus}`}
              onClick={() => {
                setBodyStatus("today");
              }}
            >
              <TodayIcon id="todayIcon" />
            </div>
            <div
              className={`bookDiv ${bodyStatus}`}
              onClick={() => {
                setBodyStatus("book");
              }}
            >
              <BookmarkIcon id="bookMarkIcon" />
            </div>
            <div
              className={`logDiv ${bodyStatus}`}
              onClick={() => {
                setBodyStatus("log");
                navigate("/");
              }}
            >
              <LogoutIcon id="logOutIcon" />
            </div>
          </div>
        </div>
        <div className="rightBody">
          <div className="bodyB">
            {villas.map((data) => {
              return (
                <div className="cardDiv">
                  <div
                    className="cardImgDiv"
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    <img className="cardImg" alt="imgCard" src={data.src} />
                  </div>
                  <div className="cardTextDiv">
                    <div className="textLeft">
                      <div className="qarPrice">{data.amt}</div>
                      <div className="textWrap">{data.text}</div>
                    </div>
                    <div className="textRight">
                      <StarIcon />
                      {data.rating}
                    </div>
                  </div>
                </div>
              );
            })}
            {villas.map((data) => {
              return (
                <div className="cardDiv">
                  <div
                    className="cardImgDiv"
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    <img className="cardImg" alt="imgCard" src={data.src} />
                  </div>
                  <div className="cardTextDiv">
                    <div className="textLeft">
                      <div className="qarPrice">{data.amt}</div>
                      <div className="textWrap">{data.text}</div>
                    </div>
                    <div className="textRight">
                      <StarIcon />
                      {data.rating}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="body">
        <div className="bodyA">
          <div className="leftBody">
            <div className="upDiv">
              <div className="homeDiv">
                <HomeIcon id="homeIcon" />
              </div>
              <div className="notifyDiv">
                <NotificationsIcon id="notifyIcon" />
              </div>
              <div className="todayDiv">
                <TodayIcon id="todayIcon" />
              </div>
              <div className="bookDiv">
                <BookmarkIcon id="bookMarkIcon" />
              </div>
            </div>
            <div className="downDiv">
              <div className="logDiv">
                <LogoutIcon id="logOutIcon" />
              </div>
            </div>
          </div>
          <div className="rightBody">
            <div className="bodyB">
              {villas.map((data) => {
                return (
                  <div className="cardDiv">
                    <div className="cardImgDiv">
                      <img className="cardImg" alt="imgCard" src={data.src} />
                    </div>
                    <div className="cardTextDiv">
                      <div className="textLeft">
                        <div className="qarPrice">{data.amt}</div>
                        <div className="textWrap">{data.text}</div>
                      </div>
                      <div className="textRight">
                        <StarIcon />
                        {data.rating}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="cardDiv">
                <div className="cardImgDiv">
                  <img className="cardImg" alt="imgCard" src={ve} />
                </div>
                <div className="cardTextDiv">
                  <div className="textLeft">
                    <div className="qarPrice">QAR 6900</div>
                    <div className="textWrap">
                      1 Bedroom Fully Furnished Apartment at Aamal Tower
                    </div>
                  </div>
                  <div className="textRight">
                    <StarIcon />
                    4.8
                  </div>
                </div>
              </div>
              <div className="cardDiv">
                <div className="cardImgDiv">
                  <img className="cardImg" alt="imgCard" src={vb} />
                </div>
                <div className="cardTextDiv">
                  <div className="textLeft">
                    <div className="qarPrice">QAR 6500</div>
                    <div className="textWrap">
                      1 Bedroom Fully Furnished Apartment at Aamal Tower
                    </div>
                  </div>
                  <div className="textRight">
                    <StarIcon />
                    4.5
                  </div>
                </div>
              </div>
              <div className="cardDiv">
                <div className="cardImgDiv">
                  <img className="cardImg" alt="imgCard" src={vc} />
                </div>
                <div className="cardTextDiv">
                  <div className="textLeft">
                    <div className="qarPrice">QAR 3500</div>
                    <div className="textWrap">
                      1 Bedroom Fully Furnished Apartment at Aamal Tower
                    </div>
                  </div>
                  <div className="textRight">
                    <StarIcon />
                    4.6
                  </div>
                </div>
              </div>
              <div className="cardDiv">
                <div className="cardImgDiv">
                  <img className="cardImg" alt="imgCard" src={vd} />
                </div>
                <div className="cardTextDiv">
                  <div className="textLeft">
                    <div className="qarPrice">QAR 1500</div>
                    <div className="textWrap">
                      1 Bedroom Fully Furnished Apartment at Aamal Tower
                    </div>
                  </div>
                  <div className="textRight">
                    <StarIcon />5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
