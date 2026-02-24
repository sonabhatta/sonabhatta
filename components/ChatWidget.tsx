"use client";

import { useMemo, useState } from "react";
import { Box, Avatar, TextField, IconButton, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I’m Sona's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickPrompts = useMemo(
    () => [
      { label: "Who", text: "Who is Sona?" },
      { label: "Education", text: "Education" },
      { label: "Internship", text: "Internship" },
      { label: "Work Experience", text: "Work Experience" },
      { label: "Skills", text: "Skills" },
      { label: "Projects", text: "Projects" },
      { label: "Leadership", text: "Leadership" },
    ],
    []
  );

  const getResponse = (text: string) => {
    const msg = text.toLowerCase();

    if (msg.includes("who")) {
      return `Sona is an Information Technology student at Southeastern Louisiana University. She’s passionate about networking, systems, and building reliable web applications with modern tools.`;
    }

    if (msg.includes("education")) {
      return `Sona is pursuing a Bachelor’s degree in Information Technology at Southeastern Louisiana University and is expected to graduate in May 2027.`;
    }

    if (msg.includes("internship")) {
      return `Sona has accepted a Summer 2026 internship as a Network Services Engineer Intern at Cleco (Pineville, Louisiana), gaining hands-on experience supporting enterprise network infrastructure.`;
    }

    if (msg.includes("work")) {
      return `Sona’s work experience includes:
• STEM Student Assistant (Southeastern Northshore STEM Center) — supporting Arduino, NVIDIA Jetson robotics, and VR/AR simulators
• Network Support Student Assistant (SLU IT Solutions) — troubleshooting Wi-Fi/Ethernet infrastructure and AP outages
• Computer Science Tutor (SLU) — tutoring programming fundamentals, data structures, and algorithms
• Student Assistant / Front Desk (Math Department) — front-desk operations and student support`;
    }

    if (msg.includes("skills")) {
      return `Sona’s skills include networking fundamentals, Wi-Fi troubleshooting, IT infrastructure support, software development, React/TypeScript, .NET, SQL, and technical tutoring.`;
    }

    if (msg.includes("projects")) {
      return `Sona has worked on projects including an Event Management Platform, Lions Den Cinema (a full-stack theater management system), and an AI-powered Interview Analyzer using speech-to-text and emotion detection.`;
    }

    if (msg.includes("leadership")) {
      return `Sona served as Director of Communications for the International Student Union, supporting outreach, social media, and promotional content to increase student engagement.`;
    }

    return `You can ask about Sona’s education, internship, work experience, skills, projects, or leadership experience.`;
  };

  const sendMessage = (customText?: string) => {
    const messageText = (customText ?? input).trim();
    if (!messageText) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: messageText },
      { role: "assistant", content: getResponse(messageText) },
    ]);

    setInput("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 380,
        px: 2,
        pb: 2,
      }}
    >
      {/* Quick prompts */}
      <Box
        sx={{
          mt: 1.5,
          mb: 1.5,
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {quickPrompts.map((prompt) => {
          const isPrimary = prompt.label === "Who";
          return (
            <Button
              key={prompt.label}
              onClick={() => sendMessage(prompt.text)}
              disableRipple
              sx={{
                textTransform: "none",
                borderRadius: 999,
                px: 1.8,
                py: 0.55,
                fontSize: 12.5,
                fontWeight: 600,
                lineHeight: 1,
                background: isPrimary
                  ? "linear-gradient(90deg, #7c3aed, #a855f7)"
                  : "rgba(255,255,255,0.08)",
                color: isPrimary ? "#fff" : "rgba(231,234,243,0.9)",
                border: isPrimary ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                "&:hover": {
                  background: isPrimary
                    ? "linear-gradient(90deg, #6d28d9, #9333ea)"
                    : "rgba(255,255,255,0.12)",
                },
              }}
            >
              {prompt.label}
            </Button>
          );
        })}
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          pr: 0.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {messages.map((msg, index) => {
          const isUser = msg.role === "user";
          return (
            <Box
              key={index}
              className="message-animate"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                flexDirection: isUser ? "row-reverse" : "row",
              }}
            >
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: isUser ? "rgba(124,58,237,0.85)" : "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#fff",
                }}
              >
                {isUser ? (
                  <PersonIcon fontSize="small" />
                ) : (
                  <SmartToyIcon fontSize="small" />
                )}
              </Avatar>

              <Box
                sx={{
                  px: 1.5,
                  py: 1.1,
                  borderRadius: 3,
                  maxWidth: "78%",
                  background: isUser
                    ? "linear-gradient(90deg, rgba(124,58,237,0.95), rgba(168,85,247,0.95))"
                    : "rgba(255,255,255,0.08)",
                  border: isUser ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  color: isUser ? "#fff" : "rgba(231,234,243,0.92)",
                  whiteSpace: "pre-line",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: 13.5, lineHeight: 1.35 }}>
                  {msg.content}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Input */}
      <Box
        sx={{
          mt: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: 999,
          px: 1.25,
          py: 0.6,
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px)",
        }}
      >
        <TextField
          variant="standard"
          placeholder="Internship, skills, coursework, leadership…"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{ disableUnderline: true }}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          sx={{
            "& input": {
              color: "rgba(231,234,243,0.92)",
              fontSize: 13.5,
            },
            "& input::placeholder": {
              color: "rgba(231,234,243,0.55)",
              opacity: 1,
            },
          }}
        />
        <IconButton
          onClick={() => sendMessage()}
          sx={{
            width: 38,
            height: 38,
            color: "#fff",
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            boxShadow: "0 10px 24px rgba(124,58,237,0.35)",
            "&:hover": {
              background: "linear-gradient(90deg, #6d28d9, #9333ea)",
            },
          }}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}