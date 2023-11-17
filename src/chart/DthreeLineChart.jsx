import React, { Component } from "react";
import { render } from "react-dom";
import { scaleLinear, scaleBand } from "d3-scale";
import XYAxis from "../../src/component/axis/xy-axis";
import Line from "../../src/component/line/Line";
import { line, curveMonotoneX } from "d3-shape";
import { curveCatmullRom } from "d3-shape";
import { scaleOrdinal } from "d3-scale";

import { extent } from "d3-array";
import { transition } from "d3-transition";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Jan", value: 5000 },
        { name: "Feb", value: 2000 },
        { name: "Mar", value: 2400 },
        { name: "Apr", value: 3000 },
        { name: "May", value: 2000 },
        { name: "Jun", value: 3000 },
        { name: "July", value: 1000 },
        { name: "Aug", value: 200 },
        { name: "Sep", value: 200 },
        { name: "Oct", value: 100 },
        { name: "Nov", value: 0 },
        { name: "Dec", value: 100 },
      ],
    };
  }

  randomData = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const data = prevState.data.map((d) => ({
        name: d.name,
        value: Math.floor(Math.random() * 100 + 1),
      }));
      return {
        data,
      };
    });
  };

  render() {
    const { data } = this.state;
    const parentWidth = 520;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map((d) => d.name))
      .rangeRound([0, width])
      .padding(0.1);

    const yScale = scaleLinear()
      .domain(extent(data, (d) => d.value)) // Dynamically set the domain based on data values
      .range([height, 0]);

    const lineGenerator = line()
      .x((d) => xScale(d.name))
      .y((d) => yScale(d.value))
      .curve(curveCatmullRom.alpha(0.8));

    return (
      <div>
        <button onClick={this.randomData}>
        <div className="self-stretch p-2.5 justify-center items-center gap-[60px] inline-flex">
        <div className="grow shrink basis-0 text-right text-neutral-900 text-base font-semibold font-['Poppins']">
          Day wise comparison
        </div>
        <div className="justify-center items-center flex">
          <div className="px-2.5 py-[5px] bg-neutral-900 rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-white text-[8px] font-semibold font-['Poppins']">
              Day
            </div>
          </div>
          <div className="px-2.5 py-[5px] rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-neutral-900 text-[8px] font-semibold font-['Poppins']">
              month
            </div>
          </div>
        </div>
      </div>
        </button>
        <svg
          className="lineChartSvg"
          width={width + margins.left + margins.right}
          height={height + margins.top + margins.bottom}
        >
          <g transform={`translate(${margins.left}, ${margins.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line
              data={data}
              xScale={xScale}
              yScale={yScale}
              lineGenerator={lineGenerator}
              width={width}
              height={height}
            />
          </g>
        </svg>
      </div>
    );
  }
}
