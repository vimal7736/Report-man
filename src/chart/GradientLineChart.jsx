import React from 'react';
import { Line } from 'react-chartjs-2';

const GradientLineChart = () => {
  const gradientLinePlugin = {
    beforeUpdate: function (chartInstance) {
      if (chartInstance.options.linearGradientLine) {
        var ctx = chartInstance.chart.ctx;
        var dataset = chartInstance.data.datasets[0];
        var minValue = Number.MAX_VALUE;
        var maxValue = Number.MIN_VALUE;
        for (var i = 0; i < dataset.data.length; ++i) {
          if (minValue > dataset.data[i]) minValue = dataset.data[i];
          if (maxValue < dataset.data[i]) maxValue = dataset.data[i];
        }
        var yAxis = chartInstance.scales['y-axis-0'];
        var minValueYPixel = yAxis.getPixelForValue(minValue);
        var maxValueYPixel = yAxis.getPixelForValue(maxValue);
        var gradient = ctx.createLinearGradient(0, minValueYPixel, 0, maxValueYPixel);
        gradient.addColorStop(0, 'rgba(231, 18, 143, 1.0)');
        gradient.addColorStop(1, 'rgba(0, 173, 238, 1.0)');
        dataset.borderColor = gradient;
      }
    },
  };

  const chartOptions = {
    linearGradientLine: true,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
  };

  const chartData = {
    labels: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    datasets: [
      {
        label: 'My Sample Dataset',
        data: [20, 30, 50, 10, 40],
        tension: 0,
        fill: false,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={chartOptions}
      plugins={[gradientLinePlugin]}
      redraw={false} // Set to false to prevent teardown and redraw on every update
      datasetIdKey="label" // Set the key name to identify the dataset
      fallbackContent={<div>Loading chart...</div>} // Fallback for when the canvas cannot be rendered
    />
  );
};

export default GradientLineChart;
