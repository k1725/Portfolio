// src/components/Services.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../assets/bg-services.jpeg";
import servicesData from "../data/services.json";

// Map of icon SVGs
const icons = {
  code: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1976d2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mobile: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#388e3c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  ),
  design: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9c27b0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  backend: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fbc02d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  cloud: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0288d1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 17.58A5.66 5.66 0 0 0 18 7h-1.26A8 8 0 1 0 4 16.25" />
      <path d="M16 16h1v1a3 3 0 0 1-6 0 2.7 2.7 0 0 1 .13-.87" />
    </svg>
  ),
  security: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d32f2f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  ),
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  const [offsetY, setOffsetY] = useState(0);
  const theme = useTheme();

  // Parallax background
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: `center ${offsetY * 0.5}px`,
        backgroundSize: "cover",
        color: "#fff",
      }}
      aria-label="Services offered"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 8,
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          What I Do
        </Typography>

        <Grid container spacing={6} alignItems="stretch">
          {servicesData.map(({ title, description, icon }, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                style={{ height: "100%" }}
              >
                <Card
                  elevation={8}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    backdropFilter: "blur(12px)",
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(0,0,0,0.4)",
                    border:
                      theme.palette.mode === "light"
                        ? "1px solid rgba(255,255,255,0.3)"
                        : "1px solid rgba(255,255,255,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow:
                        "0 16px 32px rgba(0,0,0,0.45), 0 0 12px rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      py: 6,
                      px: 4,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{icons[icon]}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: theme.palette.primary.light,
                        textShadow: "0 0 6px rgba(255,255,255,0.8)",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
