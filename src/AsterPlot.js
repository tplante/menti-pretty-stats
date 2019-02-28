import React, { PureComponent, createRef } from "react";
import * as d3 from "d3";

class AsterPlot extends PureComponent {
  node = createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const {
      node: { current: chart }
    } = this;
    d3.select(chart)
      .append("text")
      .text("hej");
  };

  render() {
    return (
      <svg
        ref={this.node}
        width="100%"
        height="100%"
        viewBox="0 0 960 540"
        preserveAspectRatio="xMidYMid"
        style={{ overflow: "visible" }}
      />
    );
  }
}

export default AsterPlot;
