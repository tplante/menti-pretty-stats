import React, { PureComponent, createRef } from "react";
import * as d3 from "d3";
import {
  poodle,
  huskyDark,
  labradorLight,
  blue
} from "@mentimeter/ragnar-colors";

// Components
import { Box } from "@mentimeter/ragnar-web";

const data = [
  {
    type: "Heading",
    votes: 8 // Reactions
  },
  {
    type: "Scales",
    votes: 12
  },
  {
    type: "Multiple choice",
    votes: 14
  },
  {
    type: "Speech bubbles",
    votes: 41
  },
  {
    type: "Word cloud",
    votes: 42
  },
  {
    type: "Ranking",
    votes: 24
  },
  {
    type: "Bullets",
    votes: 5
  },
  {
    type: "Quick form",
    votes: 5
  }
];

const LAYOUT = {
  width: 960,
  height: 540
};
const MARGIN = { top: 20, right: 20, bottom: 85, left: 70 };
const TICK_PADDING = 15;
const STROKE_WIDTH = 3;
const FONT_SIZE = 14;
const LARGE_FONT_SIZE = 18;

class LineChart extends PureComponent {
  node = createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const {
      node: { current: chart }
    } = this;
    const width = LAYOUT.width - MARGIN.left - MARGIN.right;
    const height = LAYOUT.height - MARGIN.top - MARGIN.bottom;
    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i + 1))
      .rangeRound([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.votes)])
      .nice()
      .range([height, 0]);
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(0)
      .tickPadding(TICK_PADDING);
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(0)
      .tickSizeInner(-width)
      .tickPadding(TICK_PADDING);
    const line = d3
      .line()
      .x((_, i) => xScale(i + 1))
      .y(d => yScale(d.votes))
      .curve(d3.curveCardinal);

    // Axes
    const axes = d3.select(chart).append("g");
    const x = axes
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
    const y = axes.append("g").call(yAxis);
    axes
      .selectAll("path")
      .attr("stroke", huskyDark)
      .attr("stroke-width", STROKE_WIDTH);
    axes.selectAll("text").attr("font-size", FONT_SIZE);
    axes.selectAll("line").attr("stroke", huskyDark);
    x.append("text")
      .text("Slide number")
      .attr("x", width / 2)
      .attr("y", MARGIN.bottom)
      .attr("dy", "-0.35em")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("fill", labradorLight)
      .attr("font-size", LARGE_FONT_SIZE);
    y.append("text")
      .text("Vote count")
      .attr("x", -height / 2)
      .attr("y", -MARGIN.left)
      .attr("transform", "rotate(-90)")
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("fill", labradorLight)
      .attr("font-size", LARGE_FONT_SIZE);
    x.selectAll("text")
      .attr("fill", labradorLight)
      .attr("font-weight", "bold");
    x.selectAll(".tick")
      .append("text")
      .text((_, i) => data[i].type)
      .attr("y", TICK_PADDING + FONT_SIZE)
      .attr("dy", "0.71em") // Same as is assigned to ticks by d3
      .attr("fill", poodle)
      .attr("font-size", FONT_SIZE);

    // Path
    const path = d3
      .select(chart)
      .append("g")
      .attr("transform", `translate(${xScale.bandwidth() / 2}, 0)`);
    path
      .append("path")
      .datum(data)
      .attr("stroke", blue)
      .attr("stroke-width", STROKE_WIDTH)
      .attr("fill", "none")
      .attr("d", line);
    // Points
    // Select
    const points = path.selectAll("circle").data(data);
    // Enter
    points
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", blue)
      .attr(
        "transform",
        (d, i) => `translate(${xScale(i + 1)}, ${yScale(d.votes)})`
      );
    // Exit
    points.exit().remove();
  };

  render() {
    return (
      <Box width="100%" maxWidth={LAYOUT.width - MARGIN.left - MARGIN.right}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${LAYOUT.width} ${LAYOUT.height}`}
          preserveAspectRatio="xMidYMid"
        >
          <g
            ref={this.node}
            transform={`translate(${MARGIN.left}, ${MARGIN.top})`}
          />
        </svg>
      </Box>
    );
  }
}

export default LineChart;
