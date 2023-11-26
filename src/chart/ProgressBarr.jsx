// ProgressBarr.js
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
      className="h-[280px] w-[290px] shadow rounded-lg "
      style={{
        backgroundColor: theme.backgroundColor,
        boxShadow: theme.shadow,
        color: theme.textColor,
      }}
    >
      {/* Additional information */}
      <div className="additional-info absolute mt-24 ml-[90px]">
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
      <div className="absolute ml-[3px] mt-[86px]">
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
