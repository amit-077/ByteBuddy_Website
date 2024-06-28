import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      w={"100vw"}
      borderTop={"1.5px solid #2c2c2c"}
      fontFamily={"Nunito"}
      bgColor={"#111"}
      color={"#f5f5f5"}
      pl={"6rem"}
      pr={"6rem"}
      pt={"3rem"}
      pb={"3rem"}
    >
      <HStack
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"8rem"}
        alignItems={"flex-start"}
      >
        {/* Column 1 */}
        <VStack
          display={"flex"}
          flexDir={"column"}
          alignItems={"left"}
          spacing={"1.5rem"}
          w={"30%"}
        >
          <NavLink to={"/"}>
            <Box display={"flex"} gap={"0.5rem"}>
              <Image
                src="https://res.cloudinary.com/dizoqzvu3/image/upload/v1719558613/u43qrsxzoyol2ppgwfzn.png"
                h={"2rem"}
                w={"2rem"}
              />
              <Text fontSize={"1.4rem"} fontWeight={"700"}>
                ByteBuddy
              </Text>
            </Box>
          </NavLink>
          <Box>
            <Text fontSize={"1.2rem"} fontWeight={"400"} letterSpacing={"1px"}>
              Your Ultimate Platform for Tech Learning
            </Text>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"800"} letterSpacing={"1px"}>
              Follow us on
            </Text>
            <Box display={"flex"} flexDir={"column"} gap={"0.2rem"}>
              <Link href="#">
                <Text>Twitter</Text>
              </Link>
              <Link href="#">
                <Text>Instagram</Text>
              </Link>
              <Link href="#">
                <Text>Facebook</Text>
              </Link>
            </Box>
          </Box>
        </VStack>
        {/* Column 2 */}
        <VStack
          display={"flex"}
          flexDir={"column"}
          alignItems={"left"}
          w={"30%"}
        >
          <Box>
            <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              // transform={"scale(0.3)"}
              height={"5rem"}
              w={"auto"}
            />
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={"0.8rem"} pt={"2rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"800"}>
              Company
            </Text>
            <Box display={"flex"} flexDir={"column"} gap={"0.2rem"}>
              <NavLink to={"/about"}>
                <Text>About Us</Text>
              </NavLink>
              <NavLink to={"/toc"}>
                <Text>Terms & Conditions</Text>
              </NavLink>
              <NavLink to={"/privacy-policy"}>
                <Text>Privacy Policy</Text>
              </NavLink>
            </Box>
          </Box>
        </VStack>
        {/* Column 3 */}
        <VStack
          display={"flex"}
          flexDir={"column"}
          alignItems={"left"}
          w={"30%"}
        >
          <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"800"}>
              Get In Touch
            </Text>
            <Box display={"flex"} flexDir={"column"} gap={"0.5rem"}>
              <Text display={"flex"}>
                Email :&nbsp;
                <Link href="mailto:amitkamat918@gmail.com">
                  <Text>amitkamat918@gmail.com</Text>
                </Link>
              </Text>

              <Box display={"flex"} gap={"1.5rem"} alignItems={"center"}>
                <Link href="https://instagram.com/ami_t918" isExternal>
                  <Text
                    fontSize={"1.6rem"}
                    cursor={"pointer"}
                    _hover={{ color: "#dd2563" }}
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Text>
                </Link>
                <Text
                  fontSize={"1.6rem"}
                  cursor={"pointer"}
                  _hover={{ color: "#555" }}
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </Text>
                <Link href="https://linkedin.com/in/amitkamat918" isExternal>
                  <Text
                    fontSize={"1.6rem"}
                    cursor={"pointer"}
                    _hover={{ color: "#5580e9" }}
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
