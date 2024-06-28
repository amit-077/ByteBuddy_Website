import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      bg={"rgb(51,51,51)"}
      bgGradient={
        "linear-gradient(180deg, rgba(17,17,17,1) 10%, rgba(85,128,233,1) 700%);"
      }
      color={"#fff"}
      fontFamily={"Nunito"}
    >
      <Box pt={"5rem"} pl={"17rem"} pr={"17rem"}>
        <Text
          fontSize={"2.6rem"}
          fontWeight={"700"}
          fontFamily={"Nunito"}
          textAlign={"center"}
        >
          ByteBuddy: The Tech Learning Hub for Modern Developers
        </Text>
        <Box
          fontWeight={"400"}
          fontSize={"1.2rem"}
          lineHeight={"32px"}
          textAlign={"center"}
          pt={"1.3rem"}
          color={"#c9c4cd"}
        >
          <Text>
            ByteBuddy is your ultimate hub for mastering tech knowledge!
          </Text>
          <Text>
            If you're an experienced coder, ByteBuddy will enhance your skills.
          </Text>
          <Text>
            If you're new to tech, ByteBuddy is the perfect starting point.
          </Text>
          <Text>
            Explore 30+ tech topics through interactive swipeable cards.
          </Text>
          <Text>
            Contribute your insights and join a thriving community of learners
            and innovators.
          </Text>
        </Box>
        {/* Play store button */}
        <Box
          pt={"1rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color={"#c9c4cd"} fontWeight={"400"} fontSize={"1.2rem"}>
            Coming soon on{" "}
          </Text>
          <Image
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            // transform={"scale(0.3)"}
            height={"5.5rem"}
            w={"auto"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
