// src/components/Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.mode === "dark"
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(to right, #fdfbfb, #ebedee)",
        py: 8,
        fontFamily: "Inter, sans-serif",
        color: theme.palette.text.primary,
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Info Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Kenzi Abednego
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              123 Nairobi Avenue, Nairobi, Kenya
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              kiokoabednego96@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +254 717 683923 / +254 762 820203
            </Typography>
          </Grid>

          {/* Quick Links with Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Box
                component="a"
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    pl: 1,
                  },
                }}
              >
                <i className="fas fa-home" style={{ marginRight: 8 }}></i>
                <Typography variant="body2">Home</Typography>
              </Box>
              <Box
                component="a"
                href="#about"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    pl: 1,
                  },
                }}
              >
                <i className="fas fa-info-circle" style={{ marginRight: 8 }}></i>
                <Typography variant="body2">About Us</Typography>
              </Box>
              <Box
                component="a"
                href="#services"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    pl: 1,
                  },
                }}
              >
                <i className="fas fa-concierge-bell" style={{ marginRight: 8 }}></i>
                <Typography variant="body2">Services</Typography>
              </Box>
              <Box
                component="a"
                href="#portfolio"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    pl: 1,
                  },
                }}
              >
                <i className="fas fa-briefcase" style={{ marginRight: 8 }}></i>
                <Typography variant="body2">Portfolio</Typography>
              </Box>
                
            </Stack>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Subscribe
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Get the latest updates right in your inbox.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              component="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                variant="filled"
                size="small"
                placeholder="Enter your email"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  input: { padding: "10px" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  transition: "background 0.3s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Stay connected on our social platforms.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://github.com/yourprofile"
                target="_blank"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s",
                  "&:hover": { color: "#4078c0" },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s",
                  "&:hover": { color: "#0077b5" },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/yourprofile"
                target="_blank"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s",
                  "&:hover": { color: "#1da1f2" },
                }}
              >
                <Twitter />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontWeight: 500 }}
        >
          © {new Date().getFullYear()} Kenzi Abednego. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
