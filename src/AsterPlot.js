import React, { PureComponent, createRef } from "react";
import * as d3 from "d3";
import {
  redLight,
  blueLight,
  pinkLight,
  greenLight,
  orangeLight,
  purpleLight,
  yellowLight,
  poodle,
  poodleDark,
  husky,
  huskyDark,
  blue
} from "@mentimeter/ragnar-colors";

// Components
import { Box } from "@mentimeter/ragnar-web";

const data = [
  {
    type: "Heading",
    color: redLight,
    votes: 8 // Reactions
  },
  {
    type: "Scales",
    color: blueLight,
    votes: 12
  },
  {
    type: "Multiple choice",
    color: pinkLight,
    votes: 14
  },
  {
    type: "Speech bubbles",
    color: greenLight,
    votes: 41
  },
  {
    type: "Word cloud",
    color: orangeLight,
    votes: 42
  },
  {
    type: "Ranking",
    color: purpleLight,
    votes: 24
  }
];

const DIAMETER = 540;
const INNER_RADIUS = 10;

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
    // Outer arc
    const outerPath = svg.selectAll(".outer-arc").data(pie(data));
    outerPath
      .enter()
      .append("path")
      .attr("class", "outer-arc")
      .attr("fill", huskyDark)
      .attr("fill-opacity", 0.3)
      .attr("d", outlineArc);
    // Inner arc
    const path = svg.selectAll(".arc").data(pie(data));
    path
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("fill", d => d.data.color)
      .attr("d", arc);
  };

  render() {
    return (
      <Box width="100%" maxHeight={DIAMETER}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
          preserveAspectRatio="xMidYMid"
        >
          <g ref={this.node} />
        </svg>
      </Box>
    );
  }
}

export default AsterPlot;
