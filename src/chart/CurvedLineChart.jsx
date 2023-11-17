import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import ChartJS from 'chart.js/auto';
import Chart, { App } from './DthreeLineChart';
import LineChart from './DthreeLineChart';

export const options = {
  responsive: true,
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
  scales: {
    x: {
      type: 'category',
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const generateData = (type) => {
  const dataValues = Array.from({ length: type === 'day' ? 10 : 12 }, () =>
    faker.datatype.number({ min: 0, max: 1000 })
  );

  const colorSegments = [];
  const threshold1 = 500;
  const threshold2 = 800;

  for (const value of dataValues) {
    if (value > threshold2) {
      colorSegments.push('rgb(0, 128, 0)'); // Green
    } else if (value > threshold1) {
      colorSegments.push('rgb(255, 165, 0)'); // Orange
    } else {
      colorSegments.push('rgb(255, 0, 0)'); // Red
    }
  }

  const datasets = [
    {
      label: '',
      data: dataValues,
      borderColor: colorSegments,
      backgroundColor: colorSegments.map((color) => `${color}0.5`),
      tension: 0.3,
      // fill: true,
      pointRadius: 0, // Set pointRadius to 0 to remove dots
      pointHoverRadius: 0, // Set pointHoverRadius to 0 to remove dots on hover
    },
  ];

  return {
    labels: type === 'day' ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: datasets,
  };
};


export function ChartContainer() {
  const [chartType, setChartType] = useState('day');

  const handleButtonClick = (type) => {
    setChartType(type);
  };

  return (
      <div className='bg-white h-[329px] w-[539px] shadow rounded-lg ' >
       
        <div className=' p-[20px]' >

          <App/>
        {/* <Line options={options} data={generateData(chartType)} /> */}
        </div>
      </div>
  );
}
