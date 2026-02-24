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
  Button,
  IconButton,
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
import CloseIcon from "@mui/icons-material/Close";

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
          {/* Layout: left text + right profile */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              gap: { xs: 3.5, md: 5 },
              alignItems: "center",
            }}
          >
            {/* LEFT: Text (UNCHANGED) */}
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
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(231,234,243,0.8)" }}
                >
                  Information Technology Major
                </Typography>
              </Box>

              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  mt: 2,
                  letterSpacing: "-1px",
                  fontSize: { xs: "2.25rem", md: "3.3rem" },
                  lineHeight: 1.05,
                }}
              >
                Sona Bhatta
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "rgba(231,234,243,0.72)",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                Networking • Systems • Databases • Web Development
              </Typography>

              <Divider sx={{ my: 2.5, maxWidth: 520 }} />

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<RouterIcon />} label="Networking" variant="outlined" />
                <Chip
                  icon={<DnsIcon />}
                  label="System Administration"
                  variant="outlined"
                />
                <Chip icon={<StorageIcon />} label="Databases" variant="outlined" />
                <Chip
                  icon={<SecurityIcon />}
                  label="Security Basics"
                  variant="outlined"
                />
                <Chip
                  icon={<LanguageIcon />}
                  label="Web Applications"
                  variant="outlined"
                />
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
                  backdropFilter: "blur(16px)",
                  maxWidth: 620,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(231,234,243,0.82)" }}
                >
                  Focused on building reliable systems, learning enterprise IT
                  technologies, and developing strong networking expertise.
                </Typography>
              </Box>

              <Stack
                direction="row"
                spacing={1.5}
                sx={{ mt: 3 }}
                flexWrap="wrap"
                useFlexGap
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 2.6,
                    py: 1,
                    borderRadius: 999,
                    background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                    boxShadow: "0 14px 40px rgba(124,58,237,0.35)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #6d28d9, #9333ea)",
                      boxShadow: "0 18px 55px rgba(124,58,237,0.45)",
                    },
                  }}
                  onClick={() => setChatOpen(true)}
                >
                  Ask My AI Assistant
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    px: 2.6,
                    py: 1,
                    borderRadius: 999,
                    color: "rgba(231,234,243,0.9)",
                    borderColor: "rgba(255,255,255,0.18)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.28)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  View Projects
                </Button>
              </Stack>
            </Box>

            
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 720, md: 380 }, //profilepicture
                  height: { xs: 820, md: 380 },
                  borderRadius: "50%",
                  border: "5px solid rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.55)",
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.08)",
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
      objectPosition: "1% 50%", 
      display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= CHAT FAB ================= */}
      <Fab
        color="primary"
        onClick={() => setChatOpen((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 999,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
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
            maxHeight: 520,
            borderRadius: 4,
            boxShadow: "0 22px 70px rgba(0,0,0,0.55)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(10,12,24,0.92)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(90deg, #7c3aed, #a855f7)",
              color: "white",
              px: 2,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar sx={{ bgcolor: "rgba(255,255,255,0.9)", color: "#7c3aed" }}>
                <AutoAwesomeIcon />
              </Avatar>
              <Box>
                <Typography fontWeight={700}>Ask Sona&apos;s AI Assistant</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  IT help • Networking • Projects
                </Typography>
              </Box>
            </Box>

            <IconButton
              onClick={() => setChatOpen(false)}
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <CardContent sx={{ p: 0, flex: 1, overflow: "hidden" }}>
            <ChatWidget />
          </CardContent>
        </Card>
      )}
    </>
  );
}