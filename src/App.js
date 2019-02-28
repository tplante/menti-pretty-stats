import React, { Component } from "react";
import { Box, Text } from "@mentimeter/ragnar-web";

const items = [
  "https://static.mentimeter.com/assets/awesome_individuals/ragnar-8d259309a742f0b22e31d9ba98cde5f42f9548be06acdb93b6124320acf2f337.jpg",
  "https://static.mentimeter.com/assets/awesome_individuals/emma-k-279f7752569947e0c27dc16057b1254f53288ff4deb14b2dcff380b3392a1cf9.jpg",
  "https://static.mentimeter.com/assets/awesome_individuals/victor-120d9cfa762a5f47b95b560588d85a36b365a0e952fa035b34e51a6840e22c82.jpg",
  "https://static.mentimeter.com/assets/awesome_individuals/christofer-e299a73eed9fb41806eced72876d1802ffc5350a03b66facc8f194a7d76a05cd.jpg"
];

class App extends Component {
  state = { coords: [0, 0] };

  handleMouseMove = ({ pageX, pageY }) =>
    this.setState({ coords: [pageX, pageY] });

  transform = (x, y) => `translate3d(${x - 50}px, ${y - 50}px, 0)`;

  componentDidMount = () =>
    window.addEventListener("mousemove", this.handleMouseMove);

  render() {
    const { coords } = this.state;
    return (
      <Box maxWidth="100vw">
        <Box alignItems="center" width="100%">
          <Text fontSize={100} fontWeight="bold">
            Pretty stats
          </Text>
        </Box>
      </Box>
    );
  }
}

export default App;
