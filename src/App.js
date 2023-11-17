import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LoginPage from "./pages/LoginPage";
import Mainpage from "./pages/Mainpage";
import Sales from "./component/Sales";
import TargetTable from "./component/Target";
import Payment from "./component/Payment";
import Tax from "./component/Tax";
import "./App.css";
import Dashnew from "./component/Dashnew";
import Dashboard from "./component/Dashboard";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    // Add other global styles as needed
  }
`;

const lightTheme = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
  // Add other light theme styles as needed
};

const darkTheme = {
  backgroundColor: "#333333",
  textColor: "#ffffff",
  // Add other dark theme styles as needed
};
const MainLayout = ({ children }) => {
  return (
    <div className="p-[10px]">
      <div className="flex h-[80px] w-[1256px]  gap-[20px] p-[40px]">
        <div className="flex  justify-between  h-[42px] ">
          <div className=" w-[358px]   h-[42px] font-inter text-18 font-normal leading-22 tracking-normal text-left">
            Branch name
          </div>
          <div className=" h-[38px] flex gap-[40px]  justify-between ">
            <div className="text-black  font-normal text-[12px] w-1216 h-613 top-5283 left--4760 px-30 gap-10">
              Dashboard
            </div>
            <div className="text-black  font-normal text-[12px] w-1216 h-613 top-5283 left--4760 px-30 gap-10">
              Sales
            </div>
            <div className="text-black  font-normal text-[12px] w-1216 h-613 top-5283 left--4760 px-30 gap-10">
              Payment
            </div>
            <div className="text-black  font-normal text-[12px] w-1216 h-613 top-5283 left--4760 px-30 gap-10">
              Tax
            </div>
            <div className="text-black  font-normal text-[12px] w-1216 h-613 top-5283 left--4760 px-30 gap-10">
              MIS
            </div>

          </div>
        </div>

        <div className="flex justify-between ml-14 gap-14">
          <div className="grow shrink basis-10 text-neutral-900 text-[10px] font-normal font-['Inter']">
            Export To excel
          </div>
          <div className="grow shrink basis-10 text-neutral-900 text-[10px] font-normal font-['Inter']">
            Last updated time 09-Aug-2023 08:09 AM
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/sales"
          element={
            <MainLayout>
              <Sales />
            </MainLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <MainLayout>
              <Payment />
            </MainLayout>
          }
        />
        <Route
          path="/tax"
          element={
            <MainLayout>
              <Tax />
            </MainLayout>
          }
        />

        <Route path="/branch" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/targetsetting" element={<TargetTable />} />
      </Routes>
    </Router>
  );
};

export default App;
