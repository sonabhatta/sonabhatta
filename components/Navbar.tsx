"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AboutMe from "./AboutMe";
import Projects from "./Project";
import WorkExperience from "./workexperience";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const handleOpen = (label: string) => setOpenPopup(label);
  const handleClose = () => setOpenPopup(null);

  const renderPopupContent = () => {
    switch (openPopup) {
      case "About":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Work Experience":
        return <WorkExperience />;
      case "Contact":
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Contact Me
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Phone:</strong> 9853636822
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Email:</strong>{" "}
              <a href="mailto:sona.bhatta@selu.edu">sona.bhatta@selu.edu</a>,{" "}
              <a href="mailto:sonabhatta57@gmail.com">sonabhatta57@gmail.com</a>
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Feel free to reach out — I&apos;m always happy to connect.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#111827",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          px: { xs: 2, md: 6 },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT – NAME */}
          <Typography
            fontWeight={800}
            sx={{
              letterSpacing: "-0.5px",
              fontSize: "1.05rem",
            }}
          >
            
          </Typography>

          {/* CENTER – NAV LINKS */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NavItem label="Home" onClick={handleClose} />
            <NavItem label="About" onClick={() => handleOpen("About")} />
            <NavItem label="Projects" onClick={() => handleOpen("Projects")} />
            <NavItem
              label="Work Experience"
              onClick={() => handleOpen("Work Experience")}
            />
            <NavItem label="Contact" onClick={() => handleOpen("Contact")} />
          </Box>

          {/* RIGHT – CTA */}
          <Button
            sx={{
              px: 3.5,
              py: 1,
              borderRadius: "999px",
              fontWeight: 600,
              textTransform: "none",
              color: "#fff",
              background: "linear-gradient(90deg, #7c3aed, #a855f7)",
              boxShadow: "0 12px 35px rgba(124,58,237,0.35)",
              "&:hover": {
                background: "linear-gradient(90deg, #6d28d9, #9333ea)",
              },
            }}
          >
            Get in Touch
          </Button>
        </Toolbar>
      </AppBar>

      {/* ================= MODAL ================= */}
      <Dialog
        open={!!openPopup}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: "hidden",
            background: "rgba(10,12,24,0.94)", // ✅ dark readable
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.65)",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.65)", // ✅ darker backdrop
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 800,
            py: 2,
            px: 3,
            color: "rgba(231,234,243,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {openPopup}
          <IconButton
            onClick={handleClose}
            sx={{
              color: "rgba(231,234,243,0.9)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.10)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            px: 3,
            py: 2.5,
            color: "rgba(231,234,243,0.85)",
            borderColor: "rgba(255,255,255,0.10)",
          }}
        >
          {renderPopupContent()}
        </DialogContent>
      </Dialog>
    </>
  );
}

function NavItem({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      disableRipple
      sx={{
        position: "relative",
        color: "#475569",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.95rem",
        px: 0,
        "&::after": {
          content: '""',
          position: "absolute",
          width: "0%",
          height: "2px",
          bottom: -4,
          left: 0,
          background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          transition: "width 0.3s ease",
        },
        "&:hover": {
          color: "#7c3aed",
          background: "transparent",
        },
        "&:hover::after": {
          width: "100%",
        },
      }}
    >
      {label}
    </Button>
  );
}