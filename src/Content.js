import React from "react";
import { Box, Border, Text } from "@mentimeter/ragnar-web";
import { shade, blueLight } from "@mentimeter/ragnar-colors";

// Charts
import LineChart from "./LineChart";
import AsterPlot from "./AsterPlot";

const BOX_SIZE = 200;
const ALPHA = 0.65;
const boxBackground = shade(blueLight, "white", ALPHA);

const Content = () => (
  <Box width="100%" bg="shade-1">
    <Box alignItems="center" width="100%" pb={6} pt={5}>
      <Text fontSize={9} color="brand" fontWeight="bold" mb={4}>
        Your Menti Level: Master
      </Text>
      <Text fontSize={7} mb={4}>
        Overview
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-around"
        width="100%"
        maxWidth={1000}
      >
        <Border
          alignItems="center"
          justifyContent="center"
          width={BOX_SIZE}
          height={BOX_SIZE}
          bg={boxBackground}
          borderRadius={1}
        >
          <Text mb={2} fontSize={3} textAlign="center">
            How many{" "}
            <Text fontSize={3} fontWeight="bold">
              Mentis
            </Text>{" "}
            were made?
          </Text>
          <Text fontSize={6} fontWeight="bold">
            3
          </Text>
        </Border>
        <Border
          alignItems="center"
          justifyContent="center"
          width={BOX_SIZE}
          height={BOX_SIZE}
          bg={boxBackground}
          borderRadius={1}
        >
          <Text mb={2} fontSize={3} textAlign="center">
            How many{" "}
            <Text fontSize={3} fontWeight="bold">
              Voices
            </Text>{" "}
            were heard?
          </Text>
          <Text fontSize={6} fontWeight="bold">
            35
          </Text>
        </Border>
        <Border
          alignItems="center"
          justifyContent="center"
          width={BOX_SIZE}
          height={BOX_SIZE}
          bg={boxBackground}
          borderRadius={1}
        >
          <Text mb={2} fontSize={3} textAlign="center">
            How many{" "}
            <Text fontSize={3} fontWeight="bold">
              Opinions
            </Text>{" "}
            did you receive?
          </Text>
          <Text fontSize={6} fontWeight="bold">
            100
          </Text>
        </Border>
        <Border
          alignItems="center"
          justifyContent="center"
          width={BOX_SIZE}
          height={BOX_SIZE}
          bg={boxBackground}
          borderRadius={1}
        >
          <Text mb={2} fontSize={3} textAlign="center">
            How much{" "}
            <Text fontSize={3} fontWeight="bold">
              Love
            </Text>{" "}
            did you get?
          </Text>
          <Text fontSize={6} fontWeight="bold">
            74
          </Text>
        </Border>
      </Box>
    </Box>
    <Box alignItems="center" width="100%" pt={90} px={5} bg="white">
      <Text fontSize={7} mb={4} fontWeight="bold">
        Your Most Effective Menti
      </Text>{" "}
      <Box width="100%" flexDirection="row">
        <Box alignItems="center" width="50%">
          <Text fontSize={5} mb={3}>
            Engagement Over Time
          </Text>
          <LineChart />
        </Box>
        <Box alignItems="center" width="50%">
          <Text fontSize={5} mb={3}>
            Menti Style Analysis
          </Text>
          <AsterPlot />
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center" width="100%" pb={150}>
        <Box alignItems="center" width="50%" px={5}>
          <Text fontSize={3} mt={5} textAlign="center">
            The engagement over time is almost at optimal pace.
          </Text>
          <Text fontSize={3} textAlign="center">
            Consider adding a Quiz slide to keep the energy up?
          </Text>
        </Box>
        <Box alignItems="center" width="50%" px={5}>
          <Text fontSize={3} mt={5} textAlign="center">
            Your most engaging slides are{" "}
            <Text fontWeight="bold" fontSize={3} textAlign="center">
              Word Cloud and Ranking
            </Text>
            . This makes your presentation highly{" "}
            <Text fontWeight="bold" fontSize={3} textAlign="center">
              {" "}
              Collaborative and Interactive.
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Content;
