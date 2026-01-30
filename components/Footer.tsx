"use client";

import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        background: "linear-gradient(135deg, #7c3aed, #a855f7)", // matches Navbar logo gradient
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" gutterBottom>
        &copy; {new Date().getFullYear()} Sona Bhatta. All rights reserved.
      </Typography>
      <Box>
        <IconButton
          component={Link}
          href="https://github.com/sonabhatta"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/sona-bhatta"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com/sonaaabhatta"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
       
      </Typography>
    </Box>
  );
}
