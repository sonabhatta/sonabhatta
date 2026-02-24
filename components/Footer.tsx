"use client";

import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        textAlign: "center",
        background: "rgba(10, 12, 24, 0.75)",   // ✅ dark glass
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "rgba(231,234,243,0.85)",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2026 Sona Bhatta. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={1.5} justifyContent="center">
        <IconButton
          href="https://github.com/"
          target="_blank"
          sx={{
            color: "rgba(231,234,243,0.75)",
            "&:hover": { color: "#a855f7" },
          }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          href="https://linkedin.com/"
          target="_blank"
          sx={{
            color: "rgba(231,234,243,0.75)",
            "&:hover": { color: "#a855f7" },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          href="https://instagram.com/"
          target="_blank"
          sx={{
            color: "rgba(231,234,243,0.75)",
            "&:hover": { color: "#a855f7" },
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}