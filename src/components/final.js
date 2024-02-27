import React from "react";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import "../scss/buildingPage.scss";

export default function Final() {
  return (
    <div className="finalPage" style={{ overflowX: "hidden" }}>
      <img src={p1} alt="w" className="fi" />
      <img src={p2} alt="w" className="fi" />
      <img src={p3} alt="u" className="fi" />
      <img src={p4} alt="u" className="fi" />
    </div>
  );
}
