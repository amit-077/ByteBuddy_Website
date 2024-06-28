import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Feature = ({ title, description }) => {
  return (
    <Box
      display={"flex"}
      gap={"3rem"}
      position={"relative"}
      _before={{
        content: `""`,
        position: "absolute",
        w: "2.5rem",
        h: "0.3rem",
        bgColor: "#638df2",
        top: -1.5
      }}
    >
      <Box>
        <Text fontSize={"1.2rem"} w={"10rem"} fontWeight={"800"}>
          {title}
        </Text>
      </Box>
      <Box>
        <Text fontSize={"1.2rem"} w={"20rem"}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Feature;
