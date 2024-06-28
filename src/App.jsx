import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        document.title = "Hey, come back to ByteBuddy!";
      } else {
        document.title = "ByteBuddy - Learn, Explore, and Contribute";
      }
    });
  }, []);

  return (
    <Box fontFamily={"Nunito"}>
      <Navbar />
      <Hero />
      <Hero2 />
      <Footer />
    </Box>
  );
};

export default App;
