// src/components/Skills.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { label: "HTML5", value: 95, color: "error" },
  { label: "CSS3", value: 90, color: "primary" },
  { label: "JavaScript", value: 85, color: "warning" },
  { label: "React.js", value: 80, color: "info" },
  { label: "Node.js", value: 75, color: "success" },
];

const Skills = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        My Skills
      </Typography>

      {skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            {skill.label}
          </Typography>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: "100%",
                height: 10,
                backgroundColor: "#eee",
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                sx={{
                  height: "100%",
                  backgroundColor: theme.palette[skill.color].main,
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
