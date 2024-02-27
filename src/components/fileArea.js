import React from "react";
import HomePage from "./homePage";
import BuildingPage from "./buildingPage";
import { Route, Routes } from "react-router-dom";
import MyComponent from "./detailVilla";
import DetailPage from "./details";
import DemoPage from "./summa";
import NxtDem from "./tlm";
import Final from "./final";
import Cus from "./cus";
import NxtDemo from "./nextsumma";

export default function FileArea() {
  return (
    <div id="fileAreaPage">
      <Routes>
        {" "}
        {/* <Route path="/detail" element={<DetailPage />} /> */}
        {/* <Route path="/" element={<NxtDem />} /> */}
        <Route path="/v" element={<NxtDemo />} />
        <Route path="/" element={<Final />} />
      </Routes>
    </div>
  );
}
