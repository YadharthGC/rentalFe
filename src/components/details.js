import React, { useState, useEffect } from "react";
import "../scss/detailPage.scss";
import bd from "../images/bd.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TollIcon from "@mui/icons-material/Toll";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Grid } from "@mui/material";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ma from "../images/ma.png";

export default function DetailPage() {
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
  const srcOpt = [va, vb, vc, vd, ve, vf];
  const [activeSrc, setActiveSrc] = useState(va);
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      // setInterval(() => {
      //   let imgEle = document.getElementById("imgVa");
      //   if (count === 5) {
      //     imgEle.src = srcOpt[0];
      //     setCount(0);
      //   } else {
      //     imgEle.src = srcOpt[count + 1];
      //     setCount(count + 1);
      //   }
      // }, 6000);
    } catch (err) {
      console.log(err);
    }
  });

  //   Property Description
  // Property: Apartments
  // Location: West Bay
  // Flat Number: Add Flat Number here
  // Bedrooms: 3
  // Type: Fully Furnished
  // Availability Date: Vacant Now

  return (
    <div id="DetailPage">
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
            {/* Buy
            {headStatus === "buy" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )} */}
          </div>
          <div
            className={`rentDiv ${headStatus}`}
            onClick={() => {
              setHeadStatus("rent");
            }}
          >
            {/* Rent{" "}
            {headStatus === "rent" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )} */}
          </div>
          <div
            className={`sellDiv ${headStatus}`}
            onClick={() => {
              setHeadStatus("sell");
            }}
          >
            {/* Sell{" "}
            {headStatus === "sell" ? (
              <div className="selectRound">&#9679;</div>
            ) : (
              ""
            )} */}
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
          <div className="titleText">
            <span className="arrowSpan">
              <ArrowBackIcon
                id="backArrow"
                onClick={() => {
                  navigate("/villas");
                }}
              />
            </span>
            3 Bedroom Fully Furnished Apartment at Aamal Tower
          </div>
          <div className="gridDiv">
            <Grid container md={12} spacing={2}>
              <Grid item md={6}>
                <div className="gridA">
                  <div className="imagesDiv">
                    <img src={va} id="imgVa" alt="va" className="vaImg" />
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className="gridB">
                  <div className="propertyDivv">
                    {" "}
                    <div className="propTitle">Property Description</div>
                    <div className="propCon">
                      <div className="propLeft">Property</div>
                      <div className="propRight">:Apartments</div>
                    </div>{" "}
                    <div className="propCon">
                      <div className="propLeft">Location</div>
                      <div className="propRight">:West Bay</div>
                    </div>{" "}
                    <div className="propCon">
                      <div className="propLeft">Flat no.</div>
                      <div className="propRight">:6-263D</div>
                    </div>{" "}
                    <div className="propCon">
                      <div className="propLeft">Bedrooms</div>
                      <div className="propRight">:3</div>
                    </div>{" "}
                    <div className="propCon">
                      <div className="propLeft">Type</div>
                      <div className="propRight">Fully Furnished</div>
                    </div>
                    <div className="propCon">
                      <div className="propLeft">Availability Date</div>
                      <div className="propRight">:Vacant now</div>
                    </div>
                  </div>
                  <div className="googleDiv">
                    <div className="maptext">Map</div>
                    <div className="mapIgDiv">
                      <img src={ma} alt="map" className="mapImg" />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="describeDiv">
            Amal Towers offer several advantages compared to traditional houses.
            Their affordability, especially in urban areas, makes them an
            attractive option. Shared land and construction costs, coupled with
            no yard or exterior maintenance burden, contribute to this financial
            benefit. Convenience plays a key role as well. Apartments are often
            situated in prime locations, offering close proximity to public
            transportation, stores, and restaurants, saving residents both time
            and money on travel. Security is another perk, with many apartments
            boasting features like security cameras, controlled access entry,
            and even on-site security personnel, providing residents with peace
            of mind. Maintenance-free living is a significant advantage for
            many. Unlike owning a house, where repairs and upkeep are on the
            homeowner's shoulders, apartment residents usually have the landlord
            take care of these issues, saving them time, money, and effort.
          </div>
        </div>
      </div>
    </div>
  );
}
