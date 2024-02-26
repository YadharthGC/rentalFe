import React from "react";
import HomePage from "./homePage";
import BuildingPage from "./buildingPage";
import { Route, Routes } from "react-router-dom";
import MyComponent from "./detailVilla";
import DetailPage from "./details";

export default function FileArea() {
  return (
    <div id="fileAreaPage">
      <Routes>
        {" "}
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/villas" element={<BuildingPage />} />
      </Routes>
    </div>
  );
}
