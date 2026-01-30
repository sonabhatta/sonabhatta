"use client";

import { Box, Typography, Grid, Button, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Get in Touch
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon color="primary" />
          <Typography variant="body1">9853636822</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon color="primary" />
          <Box>
            <Link href="mailto:sona.bhatta@selu.edu" underline="hover" color="inherit">
              sona.bhatta@selu.edu
            </Link>
            <br />
            <Link href="mailto:sonabhatta57@gmail.com" underline="hover" color="inherit">
              sonabhatta57@gmail.com
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Feel free to reach out via phone or email. I&apos;m always happy to connect and discuss opportunities, collaborations, or any tech-related questions!
      </Typography>

      {/* Optional CTA buttons */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            borderRadius: 999,
            textTransform: "none",
            px: 3,
            py: 1,
          }}
          href="mailto:sona.bhatta@selu.edu"
        >
          Email Me
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, textTransform: "none", px: 3, py: 1 }}
          href="tel:9853636822"
        >
          Call Me
        </Button>
      </Box>
    </Box>
  );
}
