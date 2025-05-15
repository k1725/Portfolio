import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import myPic from "../assets/team-1.jpeg";

// Import react-icons for skill icons
import { FaReact, FaNodeJs, FaPhp, FaGitAlt, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiMysql } from "react-icons/si";

const TypedText = ({ texts, speed = 100, pause = 1500 }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [blink, setBlink] = React.useState(true);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  React.useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <Typography
      component="h2"
      variant="h5"
      aria-live="polite"
      sx={{ fontWeight: 700, mb: 2, fontFamily: "monospace", color: "primary.main" }}
    >
      {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </Typography>
  );
};

const skills = [
  { name: "React", icon: <FaReact size={20} /> },
  { name: "Node.js", icon: <FaNodeJs size={20} /> },
  { name: "PHP", icon: <FaPhp size={20} /> },
  { name: "MySQL", icon: <SiMysql size={20} /> },
  { name: "JavaScript", icon: <FaJsSquare size={20} /> },
  { name: "TypeScript", icon: <SiTypescript size={20} /> },
  { name: "MongoDB", icon: <SiMongodb size={20} /> },
  { name: "Git", icon: <FaGitAlt size={20} /> },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      component="section"
      aria-labelledby="about-title"
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: theme.palette.mode === "light" ? "#e8f0fe" : "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 8 },
              alignItems: "center",
              px: { xs: 3, md: 8 },
              py: { xs: 5, md: 7 },
              borderRadius: 6,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[12],
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 12,
                left: -12,
                width: 0,
                height: 0,
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderRight: `25px solid ${theme.palette.background.paper}`,
              },
            }}
          >
            {/* Image and Name/Job Title */}
            <Box
              sx={{
                width: { xs: "100%", md: "35%" },
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={myPic}
                alt="Kenzi Abednego smiling"
                loading="lazy"
                sx={{
                  width: "100%",
                  maxWidth: 250,
                  borderRadius: 4,
                  boxShadow: theme.shadows[6],
                  objectFit: "cover",
                  mb: 2,
                  mx: "auto",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 0.5,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Kenzi Abednego
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: theme.palette.text.secondary,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Software Engineer
              </Typography>
            </Box>

            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
              {/* Centered About Me Title */}
              <Typography
                id="about-title"
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  color: theme.palette.primary.main,
                  letterSpacing: 2,
                  textAlign: "left",
                  mb: 4,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "20%",
                    transform: "translateX(-50%)",
                    width: 60,
                    height: 5,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    marginTop: 6,
                  },
                }}
              >
                About Me
              </Typography>

              <TypedText
                texts={[
                  "👋 Hey, I'm Kenzi Abednego",
                  "Software Engineer | Problem Solver | Lifelong Learner",
                  "Building scalable, modern applications with passion",
                ]}
                speed={80}
                pause={1600}
              />

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.15rem",
                  color: theme.palette.text.secondary,
                  lineHeight: 1.85,
                  fontWeight: 400,
                  mb: 3,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                I’m a passionate and results-driven <strong>Software Engineer</strong> with a strong
                foundation in building modern, scalable, and user-focused applications. I specialize in
                both frontend and backend development using technologies like React, Node.js, PHP, and MySQL.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.15rem",
                  color: theme.palette.text.secondary,
                  lineHeight: 1.85,
                  fontWeight: 400,
                  mb: 3,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                I love clean code and intuitive UI/UX. Solving problems with elegant and efficient
                solutions is what keeps me excited. I'm always learning and adapting to stay ahead in the tech landscape.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.15rem",
                  color: theme.palette.text.secondary,
                  lineHeight: 1.85,
                  fontWeight: 400,
                  mb: 0,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Whether it’s a web app, mobile interface, or a backend system, my goal is the same:
                <strong> deliver impactful, high-quality software.</strong>
              </Typography>

              {/* Skills badges with icons and hover animation */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 4,
                }}
              >
                {skills.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0px 4px 15px ${theme.palette.primary.main}`,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 16px",
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      borderRadius: 20,
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      fontFamily: "'Open Sans', sans-serif",
                      cursor: "default",
                      userSelect: "none",
                      boxShadow: theme.shadows[2],
                      originX: 0.5,
                      originY: 0.5,
                    }}
                  >
                    {icon}
                    {name}
                  </motion.div>
                ))}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "right",
                  mt: 5,
                  fontStyle: "italic",
                  color: theme.palette.text.disabled,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                — Kenzi Abednego · Software Engineer
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
