// src/components/Loader.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const fade = keyframes`
  0% { opacity: 0.2; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.2; transform: scale(0.95); }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000", // black background
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        flexDirection: "column",
        color: "#ff9800",
        animation: `${fade} 2s ease-in-out infinite`,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "monospace",
          letterSpacing: "2px",
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
