import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const SemicircleDonutChart = ({ data }) => {
  const options = {
    cutoutPercentage: 50, // Set cutoutPercentage to 50 for a true semi-circle
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default SemicircleDonutChart;
