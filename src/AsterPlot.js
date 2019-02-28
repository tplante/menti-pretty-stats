import React, { PureComponent, createRef } from "react";
import * as d3 from "d3";
import {
  redLight,
  blueLight,
  pinkLight,
  greenLight,
  orangeLight,
  purpleLight,
  husky,
  poodleDark
} from "@mentimeter/ragnar-colors";

// Components
import { Box } from "@mentimeter/ragnar-web";

const data = [
  {
    type: "Informational",
    color: redLight,
    votes: 8 // Reactions
  },
  {
    type: "Fun",
    color: blueLight,
    votes: 12
  },
  {
    type: "Feedback",
    color: pinkLight,
    votes: 14
  },
  {
    type: "Interactive",
    color: greenLight,
    votes: 41
  },
  {
    type: "Collaboration",
    color: orangeLight,
    votes: 42
  },
  {
    type: "Data Collection",
    color: purpleLight,
    votes: 24
  }
];

const DIAMETER = 450;
const MARGIN = 30;
const INNER_RADIUS = 10;
const LARGE_FONT_SIZE = 18;
const TOOLTIP_CIRCLE_RADIUS = 7;

class AsterPlot extends PureComponent {
  node = createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const {
      node: { current: chart }
    } = this;
    const radius = DIAMETER / 2;
    const pie = d3
      .pie()
      .sort(null)
      .value(d => d.votes);
    const arc = d3
      .arc()
      .innerRadius(INNER_RADIUS)
      .outerRadius(
        d => radius * (d.data.votes / d3.max(data.map(d => d.votes)))
      );
    const outlineArc = d3
      .arc()
      .innerRadius(INNER_RADIUS)
      .outerRadius(radius);
    const svg = d3
      .select(chart)
      .attr("transform", `translate(${DIAMETER / 2}, ${DIAMETER / 2})`);
    const tooltip = d3
      .select(chart)
      .append("g")
      .attr("transform", `translate(0, ${DIAMETER / 2 + MARGIN})`)
      .attr("opacity", 0);
    tooltip
      .append("circle")
      .attr("r", TOOLTIP_CIRCLE_RADIUS)
      .attr("cy", MARGIN / 2)
      .attr("fill", "transparent");
    tooltip
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-family", "Gilroy")
      .attr("font-size", LARGE_FONT_SIZE)
      .attr("fill", poodleDark);
    // Outer arc
    const outerPath = svg.selectAll(".outer-arc").data(pie(data));
    outerPath
      .enter()
      .append("path")
      .attr("class", "outer-arc")
      .attr("fill", husky)
      .attr("d", outlineArc);
    // Inner arc
    const path = svg.selectAll(".arc").data(pie(data));
    path
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("fill", d => d.data.color)
      .attr("d", arc)
      .on("mouseover", d => {
        tooltip.select("text").text(d.data.type);
        tooltip
          .select("circle")
          .transition()
          .attr("fill", d.data.color);
        tooltip.transition().attr("opacity", 1);
      })
      .on("mouseout", () => tooltip.transition().attr("opacity", 0));
  };

  render() {
    return (
      <Box width="100%" maxHeight={DIAMETER}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
          preserveAspectRatio="xMidYMid"
          style={{ overflow: "visible" }}
        >
          <g ref={this.node} />
        </svg>
      </Box>
    );
  }
}

export default AsterPlot;
