import React from 'react';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

class Line extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.initializeChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  initializeChart() {
    const node = this.ref.current;
    const { xScale, yScale, data, lineGenerator } = this.props;

    const initialData = data.map((d) => ({
      name: d.name,
      value: 0,
    }));

    // Create a linear gradient definition
    select(node)
      .append('defs')
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .selectAll('stop')
      .data([
        { offset: '0%', color: 'green' },
        { offset: '50%', color: 'yellow' },
        { offset: '100%', color: 'red' },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    // Append the path with initial data
    select(node)
      .append('path')
      .datum(initialData)
      .attr('id', 'line')
      .attr('stroke', 'url(#line-gradient)') // Use the gradient for the stroke
      .attr('stroke-width', 4) // Set the stroke width to 4 (or any desired value)
      .attr('fill', 'none')
      .attr('d', lineGenerator);

    this.updateChart(); // Call the updateChart method to transition to actual data
  }

  updateChart() {
    const { lineGenerator, data } = this.props;
    const t = transition().duration(1000);

    const line = select('#line');

    line
      .datum(data)
      .transition(t)
      .attr('d', lineGenerator);
  }

  render() {
    return <g className="line-group" ref={this.ref} />;
  }
}

export default Line;
