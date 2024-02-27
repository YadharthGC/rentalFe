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
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Final() {
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
    <div id="demoPage" className="final">
      <div className="centering">
        {" "}
        <div className="firstText">How we Operate</div>
        <div className="secondText">
          Experience the Elegance of Effortless Rentals: Delve into the
          Intricate Mechanics of Our Platform and Begin Your Journey Today
        </div>
        <div className="bodyB">
          <div className="cardDiv">
            <div
              className="cardImgDiv"
              onClick={() => {
                navigate("/detail");
              }}
            >
              <div className="rb">
                {" "}
                <WifiProtectedSetupIcon id="evaluate" />
              </div>
            </div>
            <div className="cardTextDiv">
              <div className="proName">Evaluate Property</div>
              <div className="des">
                Evaluating a property for rental involves a multifaceted
                approach. Firstly, analyzing the location to assess neighborhood
                amenities and livability is crucial.
              </div>
            </div>
          </div>
          <div>
            <KeyboardDoubleArrowRightIcon />
          </div>
          <div className="cardDiv">
            <div
              className="cardImgDiv"
              onClick={() => {
                navigate("/detail");
              }}
            >
              <div className="rb c">
                {" "}
                <PeopleAltIcon id="evaluateb" />
              </div>
            </div>
            <div className="cardTextDiv">
              <div className="proName">Connect with Representative</div>
              <div className="des">
                Engage with our representative for personalized guidance and
                expert assistance tailored to your needs. Our dedicated team
                member is ready to listen, advise, and support you throughout
                your journey.
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
          <div>
            <KeyboardDoubleArrowRightIcon />
          </div>
          <div className="cardDiv">
            <div
              className="cardImgDiv"
              onClick={() => {
                navigate("/detail");
              }}
            >
              <div className="rb d">
                {" "}
                <CheckCircleIcon id="evaluatec" />
              </div>
            </div>
            <div className="cardTextDiv">
              <div className="proName">"Finalize Deal</div>
              <div className="des">
                Seal the deal with confidence as we guide you through the final
                steps of the process. Our expert team ensures a smooth and
                transparent transaction, addressing any concerns and
                facilitating negotiations to reach a satisfactory agreement
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
        </div>
        <div className="btncc">
          <div className="viewBtn">View More</div>
        </div>
      </div>
    </div>
  );
}
