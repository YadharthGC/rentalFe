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
import TelegramIcon from "@mui/icons-material/Telegram";
import tk from "../images/al-areen-gardens-3.jpg";
import tka from "../images/DOW_0031-2.jpeg";
import tkb from "../images/al-areen-doha2-005.jpg";

export default function DemoPage() {
  const [status, setStatus] = useState("buy");
  const [villas, setVillas] = useState([
    {
      actions: "Rent",
      type: "Compound",
      src: tk,
      name: "Al Areen Gardens",
      loc: "Madinat Khalifa",
      amt: "15000",
      rating: "4.8",
      bhk: "3",
      bed: "3",
      mm: "3500",
    },
    {
      actions: "Rent",
      type: "Apartment",
      src: tka,
      name: "Aamal Tower",
      loc: "West Bay",
      amt: "6500",
      rating: "4.8",
      bhk: "2",
      bed: "2",
      mm: "2500",
    },
    {
      actions: "Rent",
      type: "Apartment",
      src: tkb,
      name: "Al Sadd Apartments",
      loc: "Al Sadd",
      amt: "QAR 6500",
      rating: "4.8",
      bhk: "2",
      bed: "2",
      mm: "1500",
    },
    // {
    //   src: vd,
    //   name: "hai",
    //   amt: "QAR 6580",
    //   text: " 3 Bedroom Semi-Furnished Apartment at Aamal Tower",
    //   rating: "4.7",
    // },
    // {
    //   src: ve,
    //   name: "hai",
    //   amt: "QAR 6800",
    //   text: "2 Bedroom Fully-furnished Apartment at Al Areen Tower",
    //   rating: "4.8",
    // },
    // {
    //   src: vf,
    //   name: "hai",
    //   amt: "QAR 3500",
    //   text: "3 Bedroom Semi-Furnished Apartment with Balcony",
    //   rating: "4.1",
    // },
  ]);
  const [headStatus, setHeadStatus] = useState("buy");
  const [bodyStatus, setBodyStatus] = useState("home");
  const navigate = useNavigate();
  return (
    <div id="demoPage">
      <div className="centering">
        {" "}
        <div className="firstText">
          {" "}
          Discover your perfect sanctuary amidst the sands.
        </div>
        <div className="secondText">
          {" "}
          Embark on a journey of discovery through our diverse range of
          properties. Explore Qatar's finest rentals, tailored to your
          lifestyle.
        </div>
        <div className="bodyB">
          {/* {villas.map((data) => {
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
        })} */}
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
                  <div className="oneDiv">
                    <div className="ab">{data.actions}</div>
                    <div className="ba">{data.type}</div>
                  </div>
                  <div className="proName">{data.name}</div>
                  <div className="proloc">
                    <span className="ll">
                      <LocationOnIcon id="tt" />
                    </span>
                    {data.loc}
                  </div>
                  <div className="sinna">
                    <div className="bhk">
                      <ApartmentIcon id="tk" />
                      {data.bhk}BHK
                    </div>
                    <div className="bed">
                      <AirlineSeatIndividualSuiteIcon id="tk" /> {data.bed} beds
                    </div>
                    <div className="mm">
                      <TollIcon id="tk" />
                      {data.mm}M2
                    </div>
                  </div>
                  <div className="rs">
                    QAR{data.amt}
                    <TelegramIcon id="aa" />
                  </div>
                  {/* <div className="textLeft">
                  <div className="qarPrice">{data.amt}</div>
                  <div className="textWrap">{data.text}</div>
                </div>
                <div className="textRight">
                  <StarIcon />
                  {data.rating}
                </div> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="btncc">
          <div className="viewBtn">View More</div>
        </div>
      </div>
    </div>
  );
}
