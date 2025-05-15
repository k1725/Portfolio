// src/components/Hero.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { GitHub, LinkedIn, Email, Download } from "@mui/icons-material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import team1 from "../assets/team-1.jpeg";
import heroBg from "../assets/hero-bg.jpeg";

const Hero = () => {
  const theme = useTheme();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
        animation: "bgZoom 30s ease-in-out infinite",
        "@keyframes bgZoom": {
          "0%, 100%": { backgroundSize: "100% 100%" },
          "50%": { backgroundSize: "110% 110%" },
        },
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Hero Content */}
      <Container sx={{ position: "relative", zIndex: 2, mt: { xs: -3, md: -6 } }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Left Column */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                pt: { xs: 6, sm: 10, md: 12 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                    fontFamily: "Times New Roman",
                  }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    style={{ color: "#ff9800", position: "relative" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Kenzi Abednego
                    <motion.span
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        height: 3,
                        backgroundColor: "#ff9800",
                        width: "0%",
                        borderRadius: 2,
                      }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </motion.span>
                </Typography>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      fontWeight: 400,
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      color: "#fff",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    <Typewriter
                      words={[
                        "A Passionate Software Engineer",
                        "A Full Stack Developer",
                        "A Problem Solver",
                        "A Tech Enthusiast",
                      ]}
                      loop
                      cursor
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </Typography>
                </motion.div>

                <Box
                  sx={{
                    backgroundColor: "#fff",
                    color: "#333",
                    px: 4,
                    py: 3,
                    borderRadius: "16px",
                    maxWidth: "600px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    fontFamily: "Times New Roman",
                    fontWeight: 400,
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                  >
                    I’m a passionate and results-driven{" "}
                    <strong>Software Engineer</strong> with a strong foundation
                    in building modern, scalable, and user-focused applications.
                  </Typography>
                </Box>

                {/* Buttons and Socials */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ display: "inline-block" }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontFamily: "Times New Roman",
                          width: { xs: "100%", sm: "auto" },
                        }}
                        href="#contact"
                      >
                        Hire Me
                      </Button>
                    </motion.div>

                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      startIcon={<Download />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: "#fff",
                        color: "#fff",
                        fontFamily: "Times New Roman",
                        "&:hover": {
                          borderColor: "#ff9800",
                          color: "#ff9800",
                        },
                        width: { xs: "100%", sm: "auto" },
                      }}
                      href="/resume.pdf"
                      download
                    >
                      Download CV
                    </Button>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, mt: 1 }}>
                    <IconButton
                      href="https://github.com/yourusername"
                      target="_blank"
                      sx={{ color: "#fff" }}
                      component={motion.a}
                      whileHover={{ scale: 1.2, color: "#ff9800" }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      sx={{ color: "#fff" }}
                      component={motion.a}
                      whileHover={{ scale: 1.2, color: "#ff9800" }}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      href="mailto:kiokoabednego96@gmail.com"
                      sx={{ color: "#fff" }}
                      component={motion.a}
                      whileHover={{ scale: 1.2, color: "#ff9800" }}
                    >
                      <Email />
                    </IconButton>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Avatar
                src={team1}
                alt="Profile"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                  border: "4px solid white",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll Down Animation */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              border: "2px solid white",
              borderRadius: "30px",
              height: "40px",
              width: "24px",
              position: "relative",
            }}
          >
            <motion.div
              animate={{ y: [6, 16, 6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundColor: "#fff",
                height: "6px",
                width: "6px",
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "6px",
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
