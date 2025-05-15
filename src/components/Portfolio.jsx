// src/components/Portfolio.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import images
import ekinaImg from "../assets/ekina-website.png";
import ecommerceAdminImg from "../assets/ecommerce-admin.png";
import ecommerceFrontImg from "../assets/ecommerce-front.png";
import portfolioImg from "../assets/portfolio.png";
import loanImg from "../assets/loan.png";

const allProjects = [
  { title: "Ekina Website", img: ekinaImg, tags: ["web", "react"] , features: ["Company info & services", "News & updates section", "Contact form integration"] },
  { title: "Ecommerce Admin", img: ecommerceAdminImg, tags: ["admin","react"], features: ["Order management dashboard","Inventory control","User role permissions"] },
  { title: "Ecommerce Frontend", img: ecommerceFrontImg, tags: ["frontend","react"], features: ["Product listing & filters","Shopping cart functionality","Checkout & payment gateway"] },
  { title: "Portfolio Site", img: portfolioImg, tags: ["portfolio","nextjs"], features: ["Project showcase carousel","Dark/light mode toggle","Contact & social links"] },
  { title: "Loan Management System", img: loanImg, tags: ["loan","nodejs"], features: ["Loan application workflow","Repayment reminders","Admin reporting tools"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function Portfolio() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [filter, setFilter] = useState("");

  const filtered = allProjects.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase()) ||
    p.tags.some(t => t.includes(filter.toLowerCase()))
  );

  return (
    <Box component="section" id="portfolio" sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.mode === "light" ? "#f0fdf4" : "#022c22" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: { xs: 4, md: 6 }, color: theme.palette.success.dark }}>
          My Projects
        </Typography>
        {/* <Box mb={4} display="flex" justifyContent="center">
          <TextField
            variant="outlined"
            placeholder="Search by title or tag..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            sx={{ width: '300px', backgroundColor: '#fff', borderRadius: 1 }}
          />
        </Box> */}

        <Grid container spacing={4} alignItems="stretch">
          {filtered.map((project, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-100px' });
            const [loaded, setLoaded] = React.useState(false);
            return (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div
                  ref={ref}
                  custom={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                  style={{ height: '100%' }}
                >
                  <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 2, boxShadow: `0 4px 20px rgba(16,185,129,0.2)`, transition: 'box-shadow 0.3s, transform 0.3s', '&:hover': { boxShadow: `0 8px 30px rgba(16,185,129,0.3)` } }}>
                    <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                      {!loaded && <Skeleton height={200} width="100%" />}
                      <CardMedia
                        component="img"
                        image={project.img}
                        alt={project.title}
                        height="200"
                        onLoad={() => setLoaded(true)}
                        sx={{ objectFit: 'cover', width: '100%', display: loaded ? 'block' : 'none' }}
                      />
                    </Box>

                    <Box component={motion.div} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 200, bgcolor: 'rgba(16,185,129,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', px: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{project.title}</Typography>
                    </Box>

                    <CardContent sx={{ pt: 3, pb: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: theme.palette.success.main }}>Features</Typography>
                      <List dense sx={{ flexGrow: 1 }}>
                        {project.features.map((feat, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckIcon sx={{ color: theme.palette.success.main }} fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={feat} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
