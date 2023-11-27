import React from "react";
import { useTheme } from "../ThemeContext";
import Tiles from "./DashBoardComponents/Tiles";
import SaleWiseComparison from "./DashBoardComponents/SaleWiseComparison";
import TotalePurschse from "./DashBoardComponents/TotalePurschse";
import TotalPayment from "./DashBoardComponents/TotalPayment";
import DaywiseComparison from "./DashBoardComponents/DaywiseComparison";
import Collection from "./DashBoardComponents/Collection";
import TopFiveSell from "./DashBoardComponents/TopFiveSell";
import LeastFiveSelling from "./DashBoardComponents/LeastFiveSelling";
import Line from "./line/Line";
import Chart from "./svg/LineChart";
import GradientLineChart from "../chart/GradientLineChart";
import { App } from "../chart/DthreeLineChart";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-3 grow w-fit">
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          boxShadow: `0 0 10px ${theme.shadowColor}`,
        }}
        className={`flex  flex-wrap   text-${theme.textColor}`}
      >
        <div className=" self-stretch grow">
          <Tiles />
          <div className="flex  self-stretch gap-[10px] p-1">
            <SaleWiseComparison />
            <TotalePurschse />
            <TotalPayment />
          </div>
        </div>
        <DaywiseComparison />
      </div>
      <div className="flex gap-[10px] p-[0.4rem] grow  flex-wrap">
        <Collection />
        <TopFiveSell />
        <LeastFiveSelling />
      </div>
    </div>
  );
};

export default Dashboard;
