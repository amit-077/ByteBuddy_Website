import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/toc" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

