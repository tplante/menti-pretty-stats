import React from "react";
import { Box, Text } from "@mentimeter/ragnar-web";
import LineChart from "./LineChart";
import AsterPlot from "./AsterPlot";

const Content = () => (
  <Box alignItems="center" width="100%" bg="shade-1">
    <Text fontSize={80} fontWeight="bold">
      (Soon) Pretty stats
    </Text>
    <Text fontSize={7} fontWeight="bold" color="brand">
      Your Menti Level: Master
    </Text>

    <Text fontSize={5} fontWeight="bold" />

    <Text fontSize={7} fontWeight="bold">
      Overview
    </Text>

    <Text fontSize={5} fontWeight="bold">
      How many Mentis were made? 3
    </Text>

    <Text fontSize={5} fontWeight="bold">
      How many voices were heard? 35
    </Text>

    <Text fontSize={5} fontWeight="bold">
      How many opinions did you receive? 100
    </Text>

    <Text fontSize={5} fontWeight="bold">
      How much love did you get? 74
    </Text>

    <Text fontSize={7} fontWeight="bold" color="green">
      Here is breakdown of your most effective Menti
    </Text>

    <Box alignItems="center" width="100%" p={4} bg="white">
      <Text fontSize={5} fontWeight="bold" mb={3}>
        Number of votes per slide
      </Text>
      <LineChart />
    </Box>

    <Text fontSize={7} fontWeight="bold">
      Your Menti Style Analysis
    </Text>

    <Box alignItems="center" width="100%" p={4}>
      <Text fontSize={5} fontWeight="bold" mb={3}>
        Aster Plot
      </Text>
      <AsterPlot />
    </Box>
  </Box>
);

export default Content;
