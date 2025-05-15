import React, { useState, useMemo, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home  from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => {
    let baseTheme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    });
    return responsiveFontSizes(baseTheme);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      
      <section id="hero">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
