import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class CircularChart extends Component {
  render() {
    const { chartData, chartColors } = this.props;

    const chartOptions = {
      chart: {
        type: 'radialBar',
      },
      colors: chartColors,
      plotOptions: {
        radialBar: {
          hollow: {
            size: '80%',
          },
          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -10,
              show: true,
              color: 'brown',
              fontSize: '15px',
            },
            value: {
              color: '#ccc',
              fontSize: '20px',
              show: true,
            },
          },
          fill: {
            type: 'solid',
          },
        },
      },
    };

    return (
      <Chart
        options={chartOptions}
        series={chartData}
        type="radialBar"
        width="100%"
        height="300vh"
      />
    );
  }
}

export default CircularChart;
