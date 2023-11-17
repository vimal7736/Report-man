import React from "react";
import { Link } from "react-router-dom";
import CircularChart from "../chart/circularProgressChart";

const Mainpage = () => {
  const calculateCircleColors = (percentage) => {
    if (percentage >= 75) {
      return {
        // backgroundColor: "", // Green for 75% and above
        borderColor: "border-green-700 shadow rounded-lg",
        chartColors: 'green'
      };
    } else if (percentage >= 50) {
      return {
        // backgroundColor: "bg-yellow-500", // Yellow for 50-74%
        borderColor: "border-yellow-700 shadow rounded-lg",
        chartColors: 'yellow'
      };
    } else {
      return {
        // backgroundColor: "bg-red-500", // Red for less than 50%
        borderColor: "border-red-700 shadow rounded-lg",
        chartColors: 'red'
      };
    }
  };
  
  const differentColors = ["#FF5733", "#33FF57", "#5733FF"];
  const progressPercentages = [95, 60, 30]; // Add percentages for the three additional charts

  return (
    <div>
      <div className="bg-white w-screen h-[76px] p-5 text-black flex justify-between items-center">
        <div className="flex justify-between">
          <div className="text-2xl font-thin w-[798px] text-left">
            <span className="font-inter text-base">Restausrant Name</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1.75">
            <i className="fas fa-sync-alt"></i> Refresh
          </button>

          <span className="text-xs font-normal leading-10">
            Last Updated: 09-Aug-2023 08:09 AM *
          </span>

          <button className="text-sm font-normal leading-15 text-red-600">
            Logout
          </button>
          <button>{/* <i className="fas fa-adjust"></i> Theme */}</button>
        </div>
      </div>
      <Link
        to="/dashboard"
        className="flex flex-wrap gap-11 h-250 p-32 justify-center relative "
      >
        {/* First CircularChart */}
        <div
          className={`circle ${
            calculateCircleColors(progressPercentages[0]).backgroundColor
          } ${calculateCircleColors(progressPercentages[0]).borderColor}`}
        >
          <CircularChart
            chartData={[progressPercentages[0]]}
            chartColors={["#33FF57"]}
          />
        </div>

        {/* Second CircularChart */}
        <div
          className={`circle ${
            calculateCircleColors(progressPercentages[1]).backgroundColor
          } ${calculateCircleColors(progressPercentages[1]).borderColor}`}
        >
          <CircularChart
            chartData={[progressPercentages[1]]}
            chartColors={["#FFC107"]}  
          />
        </div>

        {/* Third CircularChart */}
        <div
          className={`circle ${
            calculateCircleColors(progressPercentages[2]).backgroundColor
          } ${calculateCircleColors(progressPercentages[2]).borderColor}`}
        >
          <CircularChart
            chartData={[progressPercentages[2]]}
            chartColors={differentColors}
          />
        </div>
      </Link>
    </div>
  );
};

export default Mainpage;
