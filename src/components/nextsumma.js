import React, { useEffect, useState } from "react";
import "../scss/homePage.scss";
import bd from "../images/bd.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TollIcon from "@mui/icons-material/Toll";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function NxtDem() {
  const [status, setStatus] = useState("buy");
  const navigate = useNavigate();
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div id="nxthomePage">
      <div className="header">
        <div className="leftHead">
          <div className="logoDiv">
            <img alt="log" className="logoImg" src={bd} />
          </div>
        </div>
        <div className="centerHead">
          <div className="homeDiv">Home </div>
          <div className="aboutDiv">About</div>
          <div className="discDiv">Discover</div>
          <div className="conDiv">Contact</div>
        </div>
        <div className="rightHead">
          <div
            className="signInDiv"
            onClick={() => {
              navigate("/villas");
            }}
          >
            Sign In
          </div>
          <div className="signUpDiv">Sign Up</div>
        </div>
      </div>
      <div className="body">
        <div className="bigMan">
          <div className="title">Locate available rental properties</div>
          <div className="textA">
            <input
              type="text"
              placeholder="search for location"
              className="inA"
            />
          </div>
          <div className="textB">
            <div>
              <div className="thu">Property</div>
              <div className="subA">
                <input className="inB" type="text" placeholder="property" />
              </div>
            </div>
            <div>
              <div className="thu">BHK</div>
              <div className="subA">
                <input className="inB" type="text" placeholder="bhk" />
              </div>
            </div>
          </div>
          <div className="textB">
            <div>
              <div className="thu">Price</div>
              <div className="subA">
                <input className="inB" type="text" placeholder="price" />
              </div>
            </div>
            <div>
              <div className="thu">Availabilty</div>
              <div className="subA">
                <input className="inB" type="text" placeholder="availabilty" />
              </div>
            </div>
          </div>
          <div className="textA">
            <input type="text" placeholder="property type" className="inA" />
          </div>
          <div className="subText">
            <div className="sub">Search outcome</div>
          </div>
        </div>
      </div>
    </div>
  );
}
