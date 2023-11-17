// XYAxis.js
import React, { useEffect, useRef } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

const XYAxis = ({ xScale, yScale, height, ticks, t }) => {
  const xAxisRef = useRef();
  const yAxisRef = useRef();

  useEffect(() => {
    const xAxis = axisBottom(xScale).ticks(ticks);
    const yAxis = axisLeft(yScale).ticks(ticks);

    select(xAxisRef.current).call(xAxis);
    select(yAxisRef.current).call(yAxis);
  }, [xScale, yScale, ticks]);

  return (
    <g>
      {/* X Axis */}
      <g
        className="x-axis"
        transform={`translate(0, ${height})`}
        ref={xAxisRef}
        style={{ fill: 'none', stroke: 'none' }} // Hide the axis line
      />
      {/* Y Axis */}
      <g
        className="y-axis"
        ref={yAxisRef}
        style={{ fill: 'none', stroke: 'none' }} // Hide the axis line
      />
    </g>
  );
};

export default XYAxis;
