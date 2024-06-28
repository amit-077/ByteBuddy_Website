import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Terms = () => {
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
        <Box
          fontSize={"1.1rem"}
          display={"flex"}
          flexDir={"column"}
          gap={"1rem"}
        >
          <Text fontSize={"2.2rem"} fontWeight={"600"}>
            Terms and Conditions
          </Text>
          <Box>
            <Text>
              Welcome to ByteBuddy! These Terms & Conditions ("Terms") govern
              your use of the ByteBuddy mobile application and associated
              services provided by [Your Company Name] ("we", "us", "our").
            </Text>
          </Box>
          {/* Acceptance of terms */}
          <Box pt={"1rem"} display={"flex"} flexDir={"column"} gap={"0.5rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"600"}>
              <UnorderedList>
                <ListItem>Acceptance of Terms</ListItem>
              </UnorderedList>
            </Text>
            <Text>
              By accessing or using ByteBuddy, you agree to comply with these
              Terms. If you do not agree with any part of these Terms, you may
              not use our app.
            </Text>
          </Box>
          {/* Use of services */}
          <Box pt={"1rem"} display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"600"}>
              <UnorderedList>
                <ListItem>Use of Services</ListItem>
              </UnorderedList>
            </Text>
            <Text>
              <strong>Account Registration</strong>: You may be required to
              create an account to access certain features of ByteBuddy. You
              agree to provide accurate and complete information during
              registration.
            </Text>
            <Text>
              <strong>Content Usage</strong>: You acknowledge that ByteBuddy may
              contain proprietary information, including but not limited to
              text, images, videos, and software. You agree not to modify,
              reproduce, distribute, or create derivative works based on this
              content without our prior consent.
            </Text>
            <Text>
              <strong>User Conduct</strong>: You agree to use ByteBuddy in
              compliance with all applicable laws and regulations. You may not
              engage in any activity that interferes with or disrupts the
              functionality of ByteBuddy or its servers.
            </Text>
          </Box>
          {/* Modification of terms */}
          <Box pt={"1rem"} display={"flex"} flexDir={"column"} gap={"1rem"}>
            <Text fontSize={"1.2rem"} fontWeight={"600"}>
              <UnorderedList>
                <ListItem>Modifications to Terms</ListItem>
              </UnorderedList>
            </Text>
            <Text>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your continued use of ByteBuddy after any
              changes constitutes acceptance of the revised Terms.
            </Text>
          </Box>
        </Box>
      </Box>
      {/* About page content */}
      <Footer />
    </Box>
  );
};

export default Terms;
