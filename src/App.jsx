import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box fontFamily={'Nunito'}>
      <Navbar />
      <Hero/>
      <Hero2/>
      <Footer/>
    </Box>
  );
};

export default App;
