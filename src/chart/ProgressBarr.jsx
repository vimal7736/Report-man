import React from "react";
import "./ProgressBar.css";
import { useTheme } from "../ThemeContext";
import PropTypes from "prop-types";

const ProgressBarr = ({
  strokeColor,
  filterColor,
  textColor,
  branchName,
  belowTargetText,
  earningsText,
  value,
  progressBarStrokeOffset,
}) => {
  const { theme } = useTheme();

  const progressBarStyle = {
    filter: theme.isDarkTheme
      ? `drop-shadow(0 0 4px ${filterColor})`
      : "none",
  };

  const textStyle = {
    color: textColor,
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "600",
    wordWrap: "break-word",
  };


  return (
    <div
      className="h-[280px] w-[290px] shadow p-2 rounded-lg "
      style={{
        backgroundColor: theme.backgroundColor,
        boxShadow: theme.shadow,
        color: theme.textColor,
      }}
    >
            <div className="Target1000Aed  text-xs font-semibold ">Target 1000 AED</div>

      {/* Additional information */}
      <div className="additional-info text-center absolute mt-[81px] ml-[80px]">
        <div className="BranchName text-base font-semibold ">
          {branchName}
        </div>
        <div className="BelowMinimumTarget text-xs font-normal ">
          {belowTargetText}
        </div>
        <div className="EarningsToday text-xs font-normal ">
          {earningsText}
        </div>
        <div style={textStyle} className="88 text-2xl font-semibold ">
          {value}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute ml-[-4px] mt-[70px]">
        <div className="percent">
          <svg width="300" height="200">
            <circle cx="100" cy="100" r="88" stroke={theme.isDarkTheme ? '#2c2c2c' : "#CCC"}></circle>
            <circle
              cx="100"
              cy="100"
              r="88"
              style={{
                ...progressBarStyle,
                strokeDasharray: progressBarStrokeOffset,
                stroke: strokeColor,
              }}
            ></circle>
          </svg>
        </div>
      </div>
              <div className="Pur1000Aed absolute mt-[238px]  text-xs font-normal ">Pur. 1000 AED</div>
              <div className="Exp1000Aed absolute  text-xs font-normal mt-[238px]   ml-[190px] ">EXP. 1000 AED</div>
    </div>
  );
};

ProgressBarr.propTypes = {
  strokeColor: PropTypes.string.isRequired,
  filterColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  branchName: PropTypes.string.isRequired,
  belowTargetText: PropTypes.string.isRequired,
  earningsText: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  progressBarStrokeOffset: PropTypes.string.isRequired,
};

export default ProgressBarr;
