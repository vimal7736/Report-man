import React, { useEffect, useRef } from "react";
import { Chart } from "react-chartjs-2";
import variableLineColor from "./variableLineColor"; // Import the plugin

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Set up the Chart.js chart with the variable line color plugin
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;

      // Your data and options for the chart
      const data = {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Dataset 1",
            data: [100, 120, 130, 90, 110],
            borderColor: "blue",
            borderWidth: 1,
            fill: false,
          },
          // Add more datasets if needed
        ],
      };

      const options = {
        variableLineColor: {
          thresholds: [0, 115, 125],
          colors: ["green", "yellow", "red"],
        },
        // Other Chart.js options
      };

      // Apply the plugin to the chart
      chartInstance.pluginService.register(variableLineColor);

      // Update the chart with new data and options
      chartInstance.data = data;
      chartInstance.options = options;
      chartInstance.update();
    }
  }, []);

  return (
    <div>
      <h2>Variable Line Color Chart</h2>
      <Chart ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
