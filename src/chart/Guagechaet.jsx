import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Import from 'chart.js/auto'
import 'chartjs-gauge';

const GaugeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const randomScalingFactor = () => Math.round(Math.random() * 100);

    const randomData = () => [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
    ];

    const randomValue = (data) => Math.max.apply(null, data) * Math.random();

    const data = randomData();
    const value = randomValue(data);

    const config = {
      type: 'gauge',
      data: {
        datasets: [
          {
            data: data,
            value: value,
            backgroundColor: ['green', 'yellow', 'orange', 'red'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Gauge chart',
        },
        layout: {
          padding: {
            bottom: 30,
          },
        },
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: 'rgba(0, 0, 0, 1)',
        },
        valueLabel: {
          formatter: Math.round,
        },
      },
      plugins: {
        // Register 'chartjs-gauge' as a plugin
        gauge: {}
      },
    };

    const ctx = chartRef.current.getContext('2d');
    const myGauge = new Chart(ctx, config);

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      myGauge.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const handleRandomizeData = () => {
    const newChartData = chartRef.current.chart.config.data.datasets.map((dataset) => {
      return {
        ...dataset,
        data: Array.from({ length: dataset.data.length }, () => Math.round(Math.random() * 100)),
        value: Math.max.apply(null, dataset.data) * Math.random(),
      };
    });

    chartRef.current.chart.config.data.datasets = newChartData;
    chartRef.current.chart.update();
  };

  return (
    <div>
      <div style={{ width: '100%' }}>
        <canvas ref={chartRef} />
      </div>
      <button onClick={handleRandomizeData}>Randomize Data</button>
    </div>
  );
};

export default GaugeChart;
