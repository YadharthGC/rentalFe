import React, { useState, useEffect } from "react";
import "../scss/buildingPage.scss";
import { useNavigate } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import tk from "../images/al-areen-gardens-3.jpg";
import tka from "../images/DOW_0031-2.jpeg";
import tkb from "../images/al-areen-doha2-005.jpg";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Cus() {
  const navigate = useNavigate();
  return (
    <div className="cus">
      <div className="e">
        <div className="bodyB">
          <div className="customerDiv">
            <div className="numDiv">
              400
              <span className="numSpan">+</span>
            </div>
            <div className="textDiv">Happy Customers</div>
          </div>
          <div className="propertyRedDiv">
            <div className="numDiv">
              1000K
              <span className="numSpan">+</span>
            </div>
            <div className="textDiv">property Ready</div>
          </div>
          <div className="yearsDiv">
            <div className="numDiv">
              10
              <span className="numSpan">+</span>
            </div>
            <div className="textDiv">Years of Experience</div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className=""></div>
      </div>
    </div>
  );
}
