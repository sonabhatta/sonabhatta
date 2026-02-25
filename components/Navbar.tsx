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
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import AboutMe from "./AboutMe";
import Projects from "./Project";
import WorkExperience from "./workexperience";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpen = (label: string) => {
    setOpenPopup(label);
    setMobileOpen(false);
  };
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

  const navItems = [
    { label: "Home", action: () => setMobileOpen(false) },
    { label: "About", action: () => handleOpen("About") },
    { label: "Projects", action: () => handleOpen("Projects") },
    { label: "Work Experience", action: () => handleOpen("Work Experience") },
    { label: "Contact", action: () => handleOpen("Contact") },
  ];

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
          px: { xs: 1.5, md: 6 },
          zIndex: 2500,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "center" },
            position: "relative",
            minHeight: 64,
          }}
        >
          {/* MOBILE + DESKTOP: show a title so navbar is visible */}
          <Typography
            fontWeight={800}
            sx={{
              letterSpacing: "-0.5px",
              fontSize: "1.05rem",
              display: { xs: "block", md: "none" }, // ✅ show on mobile
            }}
          >
            Sona
          </Typography>

          {/* DESKTOP LEFT (optional name) */}
          <Typography
            fontWeight={800}
            sx={{
              letterSpacing: "-0.5px",
              fontSize: "1.05rem",
              position: { md: "absolute" },
              left: { md: 0 },
              display: { xs: "none", md: "block" }, // ✅ only desktop
            }}
          >
            {/* Optional: Sona */}
          </Typography>

          {/* MOBILE: Hamburger */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#111827",
            }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP: Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <NavItem label="Home" onClick={() => setMobileOpen(false)} />
            <NavItem label="About" onClick={() => handleOpen("About")} />
            <NavItem label="Projects" onClick={() => handleOpen("Projects")} />
            <NavItem
              label="Work Experience"
              onClick={() => handleOpen("Work Experience")}
            />
            <NavItem label="Contact" onClick={() => handleOpen("Contact")} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "rgba(10,12,24,0.96)",
            color: "rgba(231,234,243,0.92)",
            borderLeft: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(18px)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Typography fontWeight={800}>Menu</Typography>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "rgba(231,234,243,0.9)" }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              onClick={item.action}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

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
            background: "rgba(10,12,24,0.94)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.65)",
          },
        }}
        BackdropProps={{
          sx: { backgroundColor: "rgba(0,0,0,0.65)" },
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
            aria-label="Close dialog"
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

function NavItem({ label, onClick }: { label: string; onClick?: () => void }) {
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