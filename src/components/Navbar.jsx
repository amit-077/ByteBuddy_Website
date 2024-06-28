import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      w={"100vw"}
      h={"6rem"}
      display={"flex"}
      pl={"6rem"}
      pr={"6rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#111"}
      color={"#f5f5f5"}
    >
      <Link to={"/"}>
        <Box display={"flex"} gap={"0.8rem"} alignItems={"center"}>
          <Image
            src="https://res.cloudinary.com/dizoqzvu3/image/upload/v1719557484/tuscphdq3pohqtmkmkny.png"
            h={"2rem"}
            w={"2rem"}
          />
          <Text fontSize={"1.8rem"} fontWeight={"700"}>
            ByteBuddy
          </Text>
        </Box>
      </Link>
      <Box
        display={"flex"}
        gap={"3rem"}
        alignItems={"center"}
        fontSize={"1.1rem"}
      >
        <Box fontWeight={"600"}>
          <Link to={"/"}>
            <Text _hover={{ color: "#4793E0" }} transition={"0.3s all"}>
              Home
            </Text>
          </Link>
        </Box>
        <Box fontWeight={"600"}>
          <Link to={"/about"}>
            <Text _hover={{ color: "#4793E0" }} transition={"0.3s all"}>
              About Us
            </Text>
          </Link>
        </Box>
        <Box fontWeight={"600"}>
          <Link to={"/privacy-policy"}>
            <Text _hover={{ color: "#4793E0" }} transition={"0.3s all"}>
              Privacy Policy
            </Text>
          </Link>
        </Box>
        <Box fontWeight={"600"}>
          <Link to={"/toc"}>
            <Text _hover={{ color: "#4793E0" }} transition={"0.3s all"}>
              Terms & Conditions
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
