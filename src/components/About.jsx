import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      bgColor={"#111"}
      fontFamily={"Nunito"}
      color={"#f5f5f5"}
    >
      <Navbar />
      {/* About page content */}
      <Box pl={"8rem"} pr={"8rem"} pt={"5rem"} pb={"5rem"}>
        <Box fontSize={"1.1rem"}>
          <Text
            fontSize={"2.2rem"}
            fontWeight={"600"}
            onClick={() => {
              plausible("About_Us_Clicked", { props: { feature: "Example" } });
            }}
          >
            About Us
          </Text>
          <Box display={"flex"} flexDir={"column"} gap={"2rem"}>
            <Text pt={"1rem"}>
              Welcome to ByteBuddy, your ultimate companion in the world of tech
              learning and innovation. At ByteBuddy, we believe that mastering
              technology should be engaging, accessible, and rewarding for
              everyone—from seasoned developers to curious beginners.
            </Text>
            {/* Our Mission */}
            <Box display={"flex"} flexDir={"column"} gap={"0.6rem"}>
              <Text fontSize={"1.2rem"} fontWeight={"700"}>
                Our Mission
              </Text>
              <Text>
                Our mission is to empower tech enthusiasts worldwide by
                providing a comprehensive platform that simplifies and enriches
                the learning experience. Whether you're looking to expand your
                coding skills, stay updated with the latest tech trends, or
                connect with a global community of developers, ByteBuddy is here
                to support your journey.
              </Text>
            </Box>
            {/* What we offer */}
            <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
              <Text fontSize={"1.2rem"} fontWeight={"700"}>
                What We offer
              </Text>
              <Text>
                <strong>Comprehensive Tech Insights</strong>: Explore over 30+
                tech topics ranging from programming languages to advanced AI
                concepts, all presented in easy-to-digest formats such as
                swipeable cards.
              </Text>
              <Text>
                <strong>Daily Tech Digest</strong>: Stay informed with our daily
                updates featuring coding tips, GitHub trends, and the latest
                tech news curated just for you.
              </Text>
              <Text>
                <strong>Interactive Quizzes and Puzzles</strong>: Test your
                knowledge and problem-solving abilities with our interactive
                quizzes and puzzles designed to challenge and educate.
              </Text>
              <Text>
                <strong>Contribute and Collaborate</strong>: Share your tech
                insights, contribute to our growing knowledge base, and
                collaborate with fellow enthusiasts to foster learning and
                innovation.
              </Text>
            </Box>
            <Box pt={"0.5rem"}>
              <Text>
                Thank you for choosing ByteBuddy—where tech knowledge meets
                innovation!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* About page content */}
      <Footer />
    </Box>
  );
};

export default About;
