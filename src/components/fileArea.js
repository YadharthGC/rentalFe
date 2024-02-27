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

export default function FileArea() {
  return (
    <div id="fileAreaPage">
      <Routes>
        {" "}
        {/* <Route path="/detail" element={<DetailPage />} /> */}
        <Route path="/" element={<Cus />} />
        <Route path="/v" element={<Final />} />
      </Routes>
    </div>
  );
}
