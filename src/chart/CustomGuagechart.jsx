import React from "react";
import "./guage.css";

const CustomGaugeChart = () => {
  return (
    <div>
     
      <div className="multi-graph margin">
        JavaScript
        <div
          className="graph"
          data-name="jQuery"
          style={{ "--percentage": 80, "--fill": "#0669AD" }}
        ></div>
        <div
          className="graph"
          data-name="Angular"
          style={{ "--percentage": 60, "--fill": "#E62A39" }}
        ></div>
        <div
          className="graph"
          data-name="React"
          style={{ "--percentage": 30, "--fill": "#FEDA3E" }}
        ></div>
      </div>
    </div>
  );
};

export default CustomGaugeChart;
