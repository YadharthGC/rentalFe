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
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Cus() {
  const navigate = useNavigate();
  return (
    <div className="cus">
      <div className="firstText">
        Experience Excellence: Our Legacy of Success
      </div>
      <div className="secondText">
        With a decade of unwavering commitment, we've earned our reputation for
        unparalleled service. Trust our seasoned expertise to exceed your real
        estate expectations.
      </div>
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
        <div className="footA">
          <div className="partA">
            <div className="title">AL JAZI REAL ESTATE</div>
            <div className="part">Doha, Qatar</div>
            <div className="part">+1 246-345-0695</div>
            <div className="part">Tel No. 40320666</div>
            <div className="part">Mob No. 50008191</div>
            <div className="part">info@alijazi.com</div>
            <div className="part">www.facebook.com/AJQatar</div>
          </div>
          <div className="partB">
            <div className="title">Navigations</div>
            <div className="part">About Us</div>
            <div className="part">FAQs Page</div>
            <div className="part">Checkout</div>
            <div className="part">Contact</div>
            <div className="part">Blog</div>
          </div>
          <div className="partC">
            <div className="title">Highlights</div>
            <div className="part">Apartments</div>
            <div className="part">Houses</div>
            <div className="part">Restaurants</div>
            <div className="part">Villas</div>
            <div className="part">Compounds</div>
          </div>
          <div className="partD">
            <div className="title">Account</div>
            <div className="part">Profile</div>
            <div className="part">Property</div>
            <div className="part">Bookmarks</div>
            <div className="part">Cart</div>
          </div>
        </div>
        <div className="footB">
          <div className="atext">&copy; 2024 Al Jazi.All Rights Reserved</div>
          <div className="aicons">
            <FacebookIcon id="sicon" />
            <InstagramIcon id="sicon" />
            <XIcon id="sicon" />
            <LinkedInIcon id="sicon" />
          </div>
        </div>
      </div>
    </div>
  );
}
