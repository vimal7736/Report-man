import React from "react";
import { Link } from "react-router-dom";
import ThemeLD from "../component/svg/ThemeLD";
import { useTheme } from "../ThemeContext";
import ProgressBarr from "../chart/ProgressBarr";
import "./Mainpage.css"

const progressBarsData = [
  {
    strokeColor: "#1DFF19",
    filterColor: "#1DFF19",
    textColor: "#1DFF19",
    branchName: "Branch 1",
    belowTargetText: "100% target completed",
    earningsText: "Earnings Today ",
    value: 1233.88,
    progressBarStrokeOffset: "709",
  },
  {
    strokeColor: "#1DFF19",
    filterColor: "#1DFF19",
    textColor: "#1DFF19",
    branchName: "Branch 2",
    belowTargetText: "75% Target Completed",
    earningsText: "Earnings Today ",
    value: 1000.22,
    progressBarStrokeOffset: "580",
  },
  {
    strokeColor: "#FFE60A",
    filterColor: "#FFE60A",
    textColor: "#1DFF19",
    branchName: "Branch 3",
    belowTargetText: "66% Target Completed",
    earningsText: "Earnings Today ",
    value: 789.56,
    progressBarStrokeOffset: "500",
  },
  {
    strokeColor: "#FF1A1A",
    filterColor: "#FF1A1A",
    textColor: "#1DFF19",
    branchName: "Branch 4",
    belowTargetText: "Below Minimum Target 4",
    earningsText: "Earnings Today ",
    value: 500,
    progressBarStrokeOffset: "400",
  },
];

const Mainpage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="MainPage">
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          boxShadow: theme.shadow,
        }}
        className=" 
        "
      >
        <div className="h-[42px] gap-3  pl-4 pt-10 pr-16 flex justify-between">
          <div className="justify-start items-center flex">
            <div class="Frame199 w-96 h-10 justify-start items-center gap-10 inline-flex">
              <div class="Frame190 justify-start items-center flex">
                <div class="Frame189  absolute ml-10 p-2.5 justify-center items-center gap-2.5 flex">
                  <div class="RestaurantName   text-base font-normal">
                    Restaurant name
                  </div>
                </div>
              </div>
              <div class="Frame295 absolute ml-[290px] justify-center items-center flex ">
                <div
                  className={`Frame293 px-5 py-3 rounded-md justify-center items-center gap-2.5 flex hover:bg-${theme.hoverBgColor} hover:font-bold hover:text-${theme.hoverTextColor}`}
                >
                  <div class="Today  text-xs font-bold, ">Today</div>
                </div>
                <div
                  className={`Frame293 px-2.5 py-3 rounded-md justify-center items-center gap-2.5 flex hover:bg-${theme.hoverBgColor} hover:font-bold hover:text-${theme.hoverTextColor}`}
                >
                  <div class="Yesterday  text-xs ">Yesterday</div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-[15px] flex">
            <div className="justify-start Frame295 items-center flex">
              <div className="h-[30px] pl-2.5 py-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0  text-[9px] font-normal">
                  Last updated time 09-Aug-2023 08:09 AM
                </div>
              </div>
            </div>
            <div className="self-stretch pb-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
              <Link
                to="/login"
                className="justify-start items-center gap-2.5 inline-flex"
              >
                <div className="w-10 self-stretch text-red-600 text-xs font-normal">
                  Logout
                </div>
              </Link>
            </div>
            <div onClick={toggleTheme}>
              <ThemeLD />
            </div>
          </div>
        </div>
        <Link to="/dashboard" className="rounded-xl justify-center">
          <div className="flex flex-wrap  gap-3 p-[3rem]  justify-evenly">
            {progressBarsData.map((data, index) => (
              <ProgressBarr key={index} {...data} />
              ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
