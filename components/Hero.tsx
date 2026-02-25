"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Fab,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import ChatWidget from "./ChatWidget";
import ChatIcon from "@mui/icons-material/Chat";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import RouterIcon from "@mui/icons-material/Router";
import TerminalIcon from "@mui/icons-material/Terminal";
import SecurityIcon from "@mui/icons-material/Security";
import DnsIcon from "@mui/icons-material/Dns";

export default function Hero() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "auto", md: "calc(100vh - 64px)" },
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Glow blobs */}
        <Box
          className="hero-glow"
          sx={{
            top: { xs: -120, md: -140 },
            left: { xs: -140, md: -120 },
          }}
        />
        <Box
          className="hero-glow"
          sx={{
            width: 420,
            height: 520,
            opacity: 0.55,
            bottom: { xs: -180, md: -220 },
            right: { xs: -180, md: -220 },
            background: "rgba(124, 58, 237, 0.32)",
          }}
        />

        {/* Content container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1120,
            mx: "auto",
            px: { xs: 2.5, md: 4 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              gap: { xs: 3.5, md: 5 },
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.6,
                  py: 0.8,
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                    boxShadow: "0 0 18px rgba(168,85,247,0.6)",
                  }}
                />
                <Typography variant="caption" sx={{ color: "rgba(231,234,243,0.8)" }}>
                  Information Technology Major
                </Typography>
              </Box>

              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  mt: 2,
                  letterSpacing: "-1px",
                  fontSize: { xs: "2.1rem", md: "3.3rem" },
                  lineHeight: 1.05,
                }}
              >
                Sona Bhatta
              </Typography>

              <Typography sx={{ mt: 1.5, color: "rgba(231,234,243,0.72)" }}>
                Networking • Systems • Databases • Web Development
              </Typography>

              <Divider sx={{ my: 2.5, maxWidth: 520 }} />

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<RouterIcon />} label="Networking" variant="outlined" />
                <Chip icon={<DnsIcon />} label="System Administration" variant="outlined" />
                <Chip icon={<StorageIcon />} label="Databases" variant="outlined" />
                <Chip icon={<SecurityIcon />} label="Security Basics" variant="outlined" />
                <Chip icon={<LanguageIcon />} label="Web Applications" variant="outlined" />
                <Chip icon={<TerminalIcon />} label="Linux & CLI" variant="outlined" />
              </Stack>

              <Box
                sx={{
                  mt: 3,
                  px: 2,
                  py: 1.75,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Typography variant="body2">
                  Focused on building reliable systems, learning enterprise IT
                  technologies, and developing strong networking expertise.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    px: 2.6,
                    py: 1,
                    borderRadius: 999,
                    background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  }}
                  onClick={() => setChatOpen(true)}
                >
                  Ask My AI Assistant
                </Button>
              </Stack>
            </Box>

            {/* RIGHT IMAGE (fixed for mobile) */}
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
              <Box
                sx={{
                  width: { xs: 190, sm: 240, md: 380 },   // ✅ smaller on phone
                  height: { xs: 190, sm: 240, md: 380 },  // ✅ circle on phone
                  mt: { xs: 2, md: 0 },
                  borderRadius: "50%",
                  border: "5px solid rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.55)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="/profile.jpeg"
                  alt="Profile"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 35%", // ✅ better face centering on phone
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CHAT FAB */}
      <Fab
        color="primary"
        onClick={() => setChatOpen((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: { xs: 18, sm: 30 },
          right: { xs: 18, sm: 30 },
          zIndex: 2000,
        }}
      >
        <ChatIcon />
      </Fab>

      {/* CHAT WINDOW (fixed for mobile) */}
      {chatOpen && (
        <Card
          sx={{
            position: "fixed",
            bottom: { xs: 84, sm: 80 }, // ✅ pushes it above the FAB
            right: { xs: 12, sm: 30 },
            width: { xs: "calc(100vw - 24px)", sm: 360 },
            maxWidth: 360,
            zIndex: 2001,
            borderRadius: 4,
          }}
        >
          <CardContent sx={{ p: 0 }}>
            {/* ✅ make chat height smaller on phone */}
            <Box sx={{ height: { xs: 360, sm: 420 } }}>
              <ChatWidget onClose={() => setChatOpen(false)} />
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}