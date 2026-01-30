"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Fab,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import ChatWidget from "./ChatWidget";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatIcon from "@mui/icons-material/Chat";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import RouterIcon from "@mui/icons-material/Router";
import TerminalIcon from "@mui/icons-material/Terminal";
import SecurityIcon from "@mui/icons-material/Security";
import DnsIcon from "@mui/icons-material/Dns";

export default function Hero() {
  const [chatOpen, setChatOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* ================= HERO PROFILE SECTION ================= */}
      <Box
        sx={{
          backgroundColor: darkMode ? "#0b1020" : "#f9fafb",
          color: darkMode ? "#e5e7eb" : "inherit",
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            height: 260,
            backgroundImage: "url('/cover.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/* Tech Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: darkMode
                ? "linear-gradient(120deg, rgba(99,102,241,0.55), rgba(0,0,0,0.85))"
                : "linear-gradient(120deg, rgba(124,58,237,0.35), rgba(0,0,0,0.55))",
            }}
          />
        </Box>

        {/* Profile Content */}
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 3, position: "relative" }}>
          {/* Profile Picture */}
          <Avatar
            src="/IMG_8481.png"
            alt="Sona Bhatta"
            sx={{
              width: 170,
              height: 170,
              border: "6px solid white",
              position: "absolute",
              top: -95,
              left: 24,
              boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
              objectFit: "cover",
              objectPosition: "50% 40%",
              backgroundColor: "#e5e7eb",
            }}
          />

          {/* Text Info */}
          <Box sx={{ pt: 9, pb: 5, pl: { xs: 0, md: 24 } }}>
            <Typography
              variant="overline"
              sx={{
                color: darkMode ? "#a5b4fc" : "#7c3aed",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Information Technology Major
            </Typography>

            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: darkMode ? "#f9fafb" : "#111827" }}
            >
              Sona Bhatta
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Networking • Systems • Databases • Web Development
            </Typography>

            <Divider sx={{ my: 2, maxWidth: 420 }} />

            {/* Core IT Areas */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip icon={<RouterIcon />} label="Networking" variant="outlined" />
              <Chip icon={<DnsIcon />} label="System Administration" variant="outlined" />
              <Chip icon={<StorageIcon />} label="Databases" variant="outlined" />
              <Chip icon={<SecurityIcon />} label="Security Basics" variant="outlined" />
              <Chip icon={<LanguageIcon />} label="Web Applications" variant="outlined" />
              <Chip icon={<TerminalIcon />} label="Linux & CLI" variant="outlined" />
            </Stack>

            {/* Professional IT Statement */}
            <Box
              sx={{
                mt: 3,
                px: 2,
                py: 1.5,
                borderRadius: 2,
                backgroundColor: darkMode ? "#020617" : "#f3f4f6",
                color: darkMode ? "#e5e7eb" : "#374151",
                maxWidth: 560,
              }}
            >
              <Typography variant="body2">
                Focused on building reliable systems, learning enterprise IT
                technologies, and developing strong networking expertise.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= CHAT FAB ================= */}
      <Fab
        color="primary"
        onClick={() => setChatOpen((prev) => !prev)}
        onDoubleClick={() => setDarkMode((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 999,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <ChatIcon />
      </Fab>

      {/* ================= CHAT WINDOW ================= */}
      {chatOpen && (
        <Card
          sx={{
            position: "fixed",
            bottom: 80,
            right: 30,
            width: 360,
            maxHeight: 500,
            borderRadius: 3,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            backgroundColor: darkMode ? "#020617" : "#ffffff",
            color: darkMode ? "#e5e7eb" : "inherit",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: darkMode
                ? "linear-gradient(90deg, #4338ca, #6366f1)"
                : "linear-gradient(90deg, #7c3aed, #a855f7)",
              color: "white",
              p: 2,
              display: "flex",
              gap: 1.5,
            }}
          >
            <Avatar sx={{ bgcolor: "white", color: "#7c3aed" }}>
              <AutoAwesomeIcon />
            </Avatar>
            <Box>
              <Typography fontWeight={600}>Ask Sona&apos;s AI Assistant</Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                IT help • Networking • Projects
              </Typography>
            </Box>
          </Box>

          <CardContent sx={{ p: 0, flex: 1, overflowY: "auto" }}>
            <ChatWidget />
          </CardContent>
        </Card>
      )}
    </>
  );
}
