import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Feature from "./Feature";
import Footer from "./Footer";

const Hero2 = () => {
  return (
    <Box
      pl={"6rem"}
      pr={"6rem"}
      bgColor={"#111"}
      w={"100vw"}
      minH={"100vh"}
      color={"#fff"}
      pt={"5rem"}
      pb={"5rem"}
    >
      <HStack w={"100%"} spacing={"3rem"} justifyContent={"center"}>
        {/* Left */}
        <VStack w={"40%"}>
          <Box textAlign={"center"}>
            <Text
              fontFamily={"Nunito"}
              fontSize={"3rem"}
              fontWeight={"600"}
              lineHeight={"50px"}
            >
              Explore the latest in tech insights and developer features.
            </Text>
          </Box>
        </VStack>
        {/* Right */}
        <VStack w={"60%"} spacing={"3rem"}>
          {/* Item 1 */}
          <Feature
            title={"Daily Digest: Your Daily Tech Knowledge Boost"}
            description={
              " Get ByteBuddy's Daily Tech Digest for curated coding tips, GitHub trends, and the latest in tech and AI news, all in one place."
            }
          />
          {/* Item 2 */}
          <Feature
            title={"Contribute: Share Your Tech Insights"}
            description={
              "Share your tech insights and collaborate with our global community to enhance tech knowledge together."
            }
          />
          {/* Item 3 */}
          <Feature
            title={"Preferences: Customize Your Tech Experience"}
            description={
              "Tailor your ByteBuddy experience by selecting from 30+ tech topics to personalize your feed and stay updated with what matters most to you."
            }
          />
          {/* Item 4 */}
          <Feature
            title={"Puzzles, Quizzes, and More!"}
            description={
              "Enjoy ByteBuddy's interactive puzzles and quizzes to challenge your tech skills and knowledge."
            }
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default Hero2;
