import React, { useEffect, useState } from "react";
import "../scss/homePage.scss";
import bd from "../images/bd.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TollIcon from "@mui/icons-material/Toll";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [status, setStatus] = useState("buy");
  const navigate = useNavigate();
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div id="homePage">
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
        <div className="bodyA">
          Qatar is <span className="highGreen">Home for MILLIONS ,</span>
          <br />
          find your <span className="highGreen">perfect Home</span> with us
        </div>
        <div className="bodyC">
          <div className="topicDiv">
            <div
              className={`buyDiv ${status}`}
              onClick={() => {
                setStatus("buy");
              }}
            >
              Rent
            </div>
            {/* <div
              className={`rentDiv ${status}`}
              onClick={() => {
                setStatus("rent");
              }}
            >
              Rent
            </div>
            <div
              className={`sellDiv ${status}`}
              onClick={() => {
                setStatus("sell");
              }}
            >
              Sell
            </div> */}
          </div>
          <div className="detailsDiv">
            <div className="locTnt">
              <div
                className="locTop"
                // style={{ width: "71px" }}
              >
                <LocationOnIcon id="locTopIcon" />
                Location
              </div>
              <div className="locTopDiv">
                <select className="locSelect">
                  <option value="" disabled selected>
                    Location
                  </option>
                  <option value="kovilpatti">Doha</option>
                  <option value="thoothukudi">WestBay</option>
                </select>
              </div>
            </div>
            <div className="locTnt">
              <div
                className="locTop"
                // style={{ width: "72px", paddingLeft: "1px" }}
              >
                <ApartmentIcon id="locTopIcon" />
                Property
              </div>
              <div className="locTopDiv">
                <select className="locSelect">
                  <option value="" disabled selected>
                    Property
                  </option>
                  <option value="kovilpatti">Apartments</option>
                  <option value="thoothukudi">Buildings</option>
                </select>
              </div>
            </div>
            <div className="locTnt">
              <div
                className="locTop"
                // style={{ width: "80px", paddingLeft: "2px" }}
              >
                <AirlineSeatIndividualSuiteIcon id="locTopIcon" />
                Bedrooms
              </div>
              <div className="locTopDiv">
                <select className="locSelect">
                  <option value="" disabled selected>
                    Bedrooms
                  </option>
                  <option value="kovilpatti">1</option>
                  <option value="thoothukudi">2</option>
                </select>
              </div>
            </div>
            <div className="locTnt">
              <div
                className="locTop"
                // style={{ width: "49px", paddingLeft: "2px" }}
              >
                <TollIcon id="locTopIcon" />
                Price
              </div>
              <div className="locTopDiv">
                <select className="locSelect">
                  <option value="" disabled selected>
                    Price
                  </option>
                  <option value="kovilpatti">&gt; QAR1000</option>
                  <option value="thoothukudi">&gt; QAR2000</option>
                </select>
              </div>
            </div>

            <div className="searchDiv">
              <div className="searchSub">
                <SearchIcon id="searchIcon" />
                Search
              </div>
            </div>
          </div>
          {/* <div className="formDiv">
            <div className="optionsDiv">
              <div
                // className={`buyDiv ${status}`}
                className="formBuy"
                onClick={() => {
                  setStatus("buy");
                }}
              >
                Buy
              </div>
              <div
                // className={`rentDiv ${status}`}
                className="formRent"
                onClick={() => {
                  setStatus("rent");
                }}
              >
                Rent
              </div>
              <div
                // className={`sellDiv ${status}`}
                className="formSell"
                onClick={() => {
                  setStatus("sell");
                }}
              >
                Sell
              </div>
            </div>
            <div className="formDetails">
              <div className="locProDiv">
                <div className="locationDiv">
                  <LocationOnIcon id="locationIcon" />
                  <select className="locationSelect">
                    <option value="">Location</option>
                    <option value="kovilpatti">Doha</option>
                    <option value="thoothukudi">WestBay</option>
                  </select>
                </div>
                <div className="propertyDiv">
                  <ApartmentIcon id="propertyDiv" />
                  <select className="propertySelect">
                    <option value="">Property</option>
                    <option value="kovilpatti">Apartments</option>
                    <option value="thoothukudi">Buildings</option>
                  </select>
                </div>
              </div>
              <div className="bedAmtDiv">
                <div className="bedDiv">
                  <AirlineSeatIndividualSuiteIcon id="bedIcon" />
                  <select className="bedSelect">
                    <option value="">Bedrooms</option>
                    <option value="kovilpatti">1</option>
                    <option value="thoothukudi">2</option>
                  </select>
                </div>
                <div className="amtDiv">
                  <TollIcon id="amtIcon" />
                  <select className="amtSelect">
                    <option value="">Price</option>
                    <option value="kovilpatti">&gt; QAR1000</option>
                    <option value="thoothukudi">&gt; QAR2000</option>
                  </select>
                </div>
              </div>
              <div className="searchDiv">
                <div className="searchSub">
                  <SearchIcon id="searchIcon" />
                  Search
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="bodyB">
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
        </div> */}
      </div>
    </div>
  );
}
