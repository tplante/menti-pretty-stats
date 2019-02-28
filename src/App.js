import React from "react";
import { Box } from "@mentimeter/ragnar-web";
import Content from "./Content";
import LineChart from "./LineChart";

const App = () => (
  <Box width="100%" alignItems="center">
    <Content />
    <LineChart />
  </Box>
);

export default App;
