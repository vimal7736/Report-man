                  import React from 'react';
                  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
                  import { Doughnut } from 'react-chartjs-2';

                  ChartJS.register(ArcElement, Tooltip, Legend);

                  const dataArray = [
                    {
                      totalAmount: 365.61,
                      paymentMethods: [
                        { name: 'Cash', color: "#23CCD1", percentage: "60"},
                        { name: 'Google pay', color: "#F7DC67", percentage: "25" },
                        { name: 'Credit card', color: "#F56C40", percentage: "30" },
                        { name: 'Credit ', color: "#A7236F", percentage: "15" },
                      ],
                    },
                  ];


                  export function DChart() {
                    const data = {
                      datasets: [
                        {
                          data: dataArray[0].paymentMethods.map((method) => method.percentage),
                          borderWidth: 1,
                          backgroundColor: dataArray[0].paymentMethods.map((method) => method.color),
                          borderColor: 'rgba(255, 255, 255, 0.7)',
                        },
                      ],
                    };

                    const options = {
                      animation: {
                        duration: 1000,
                        easing: 'easeInOutQuart',
                      },
                      elements: {
                        arc: {
                          borderWidth: 10,
                          borderColor: 'rgba(255,255,255,0.5)',
                          borderRadius: 5,
                        },
                      },
                      tooltips: {
                        enabled: true,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        titleFontColor: '#333',
                        bodyFontColor: '#333',
                        borderColor: '#ccc',
                        borderWidth: 1,
                        displayColors: false,
                      },
                    };

                    // Set the desired width and height values
                    const width = 600; // specify the width you want
                    const height = 600; // specify the height you want

                    return <Doughnut data={data} options={options} width={width} height={height} />;
                  }
