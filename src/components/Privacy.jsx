import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Privacy = () => {
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
          <Text
            fontSize={"2.2rem"}
            fontWeight={"600"}
            onClick={() => {
              plausible("Privacy_Policy", {
                props: { feature: "Privacy Policy Clicked" },
              });
            }}
          >
            Privacy Policy
          </Text>
          <Box>
            <Text>
              Welcome to ByteBuddy! We value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, and safeguard your data when you use our
              mobile application, ByteBuddy.
            </Text>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={"2rem"}>
            <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
              <UnorderedList>
                <ListItem>
                  <Text fontSize={"1.5rem"} fontWeight={"700"}>
                    Information We Collect
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                <strong>Personal Information</strong>: When you create an
                account or use our services, we may collect personal information
                such as your name, email address, and login details. We also
                support Google login, which means we may collect information
                from your Google account with your permission.
              </Text>
              <Text>
                <strong>Usage Data</strong>: We collect information about your
                interactions with the app, including the topics you select for
                your feed, pages visited, and features used.
              </Text>
              <Text>
                <strong>Device Information</strong>: We may collect information
                about the device you use to access our app, including the device
                type, operating system, and unique device identifiers.
              </Text>
            </Box>
            {/* How We Use Your Information */}
            <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
              <UnorderedList>
                <ListItem>
                  <Text fontSize={"1.5rem"} fontWeight={"700"}>
                    How We Use Your Information
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                <strong>To Provide and Improve Our Services</strong>: We use
                your information to deliver the features of the app, personalize
                your experience, and improve the app's functionality.
              </Text>
              <Text>
                <strong>Communication</strong>: We may use your email address to
                send you updates, newsletters, and other relevant information
                about ByteBuddy.
              </Text>
              <Text>
                <strong>Analytics</strong>: We use analytics tools to understand
                how users interact with our app, helping us improve and optimize
                our services.
              </Text>
            </Box>
            {/* How We Share Your Information */}
            <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
              <UnorderedList>
                <ListItem>
                  <Text fontSize={"1.5rem"} fontWeight={"700"}>
                    How We Share Your Information
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                <strong>Service Providers</strong>: We may share your
                information with third-party service providers who assist us in
                operating our app and providing our services.
              </Text>
              <Text>
                <strong>Legal Requirements</strong>: We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </Text>
            </Box>
            {/* Security of Your Information */}
            <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
              <UnorderedList>
                <ListItem>
                  <Text fontSize={"1.5rem"} fontWeight={"700"}>
                    Security of Your Information
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, so we
                cannot guarantee absolute security.
              </Text>
            </Box>
            {/* Changes to This Privacy Policy */}
            <Box display={"flex"} flexDir={"column"} gap={"0.8rem"}>
              <UnorderedList>
                <ListItem>
                  <Text fontSize={"1.5rem"} fontWeight={"700"}>
                    Changes to This Privacy Policy
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </Text>
            </Box>
          </Box>
          <Text pt={"1.5rem"}>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <Link href="mailto:amitkamat918@gmail.com" isExternal>
              amitkamat918@gmail.com
            </Link>
            .
          </Text>
        </Box>
      </Box>
      {/* About page content */}
      <Footer />
    </Box>
  );
};

export default Privacy;
