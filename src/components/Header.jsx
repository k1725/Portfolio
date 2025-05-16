import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import team1 from "../assets/team-1.jpeg";

// ✅ Navigation items (ensure matching section IDs in your HTML/JSX)
const navItems = [
  { text: "Home", icon: <HomeIcon />, href: "#hero" },
  { text: "About", icon: <InfoIcon />, href: "#about" },
  { text: "Services", icon: <BuildIcon />, href: "#services" },
  { text: "Portfolio", icon: <WorkIcon />, href: "#portfolio" },
  // { text: "Contact", icon: <ContactMailIcon />, href: "#contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* ✅ Add this to your global CSS (e.g., index.css): 
          html { scroll-behavior: smooth; }
      */}

      <AppBar position="sticky" sx={{ backgroundColor: "#0d1b2a", boxShadow: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box
            component="a"
            href="#hero" // ✅ Updated to match Home section ID
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: 1.5,
            }}
          >
            <Box
              component="img"
              src={team1}
              alt="Logo"
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                color: "#ffffff",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              Kenzi&nbsp;
              <Box component="span" sx={{ color: "#fca311" }}>
                Abednego
              </Box>
            </Typography>
          </Box>

          {/* Navigation Section */}
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250, backgroundColor: "#1b263b", height: "100%" }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem button key={item.text} component="a" href={item.href}>
                        <ListItemIcon sx={{ color: "#fca311" }}>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            sx: { color: "white", fontWeight: 500 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  href={item.href}
                  startIcon={item.icon}
                  sx={{
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#fca311",
                      color: "#0d1b2a",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
