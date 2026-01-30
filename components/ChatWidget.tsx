"use client";
import { useState } from "react";
import { Box, Avatar, TextField, IconButton, Button } from "@mui/material";
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

  /* ✅ Quick clickable prompts */
  const quickPrompts = [
    { label: "Who", text: "Who is Sona?" },
    { label: "Education", text: "Education" },
    { label: "Internship", text: "Internship" },
    { label: "Skills", text: "Skills" },
    { label: "Projects", text: "Projects" },
    { label: "Leadership", text: "Leadership" },
  ];

  const getResponse = (text: string) => {
    const msg = text.toLowerCase();

    if (msg.includes("who")) {
      return `Sona is a junior majoring in Information Technology at Southeastern Louisiana University, expected to graduate in May 2027. She is passionate about software development, networking, and emerging technologies.`;
    }

    if (msg.includes("education")) {
      return `Sona is pursuing a Bachelor’s degree in Information Technology at Southeastern Louisiana University and will graduate in May 2027.`;
    }

    if (msg.includes("internship")) {
      return `Sona has accepted a Summer 2026 internship as a Network Services Engineer Intern at Cleco in Pineville, Louisiana, where she will gain hands-on experience supporting enterprise network infrastructure.`;
    }

    if (msg.includes("skills")) {
      return `Sona’s skills include networking fundamentals, Wi-Fi troubleshooting, IT infrastructure support, software development, React, TypeScript, .NET, SQL, and technical tutoring.`;
    }

    if (msg.includes("projects")) {
      return `Sona has worked on projects including an Event Management Platform, Lions Den Cinema (a full-stack theater management system), and an AI-powered Interview Analyzer using speech-to-text and emotion detection.`;
    }

    if (msg.includes("leadership")) {
      return `Sona served as Director of Communications for the International Student Union, managing social media, designing promotional materials, and increasing student engagement through outreach initiatives.`;
    }

    return `You can ask about Sona’s education, internship, skills, projects, or leadership experience.`;
  };

  const sendMessage = (customText?: string) => {
    const messageText = customText ?? input;
    if (!messageText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: messageText },
      { role: "assistant", content: getResponse(messageText) },
    ]);

    setInput("");
  };

  return (
    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", height: 360 }}>
      
      {/* ✅ Quick Prompt Buttons */}
      <Box
        sx={{
          mb: 2,
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {quickPrompts.map((prompt) => (
          <Button
            key={prompt.label}
            onClick={() => sendMessage(prompt.text)}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2.5,
              py: 0.6,
              fontSize: 13,
              background:
                prompt.label === "Who"
                  ? "linear-gradient(90deg, #a855f7, #7c3aed)"
                  : "#ede9fe",
              color:
                prompt.label === "Who" ? "#fff" : "#4c1d95",
              boxShadow:
                prompt.label === "Who"
                  ? "0 6px 16px rgba(124,58,237,0.35)"
                  : "none",
              "&:hover": {
                background:
                  prompt.label === "Who"
                    ? "linear-gradient(90deg, #9333ea, #6d28d9)"
                    : "#ddd6fe",
              },
            }}
          >
            {prompt.label}
          </Button>
        ))}
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pr: 1,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: 1,
              flexDirection: msg.role === "user" ? "row-reverse" : "row",
            }}
          >
            <Avatar
              sx={{
                bgcolor: msg.role === "user" ? "#3b82f6" : "#ede9fe",
                width: 32,
                height: 32,
              }}
            >
              {msg.role === "user" ? (
                <PersonIcon fontSize="small" />
              ) : (
                <SmartToyIcon fontSize="small" sx={{ color: "#7c3aed" }} />
              )}
            </Avatar>

            <Box
              sx={{
                px: 2,
                py: 1.2,
                borderRadius: 4,
                maxWidth: "75%",
                fontSize: 14,
                background:
                  msg.role === "user" ? "#3b82f6" : "#f3f4f6",
                color: msg.role === "user" ? "#fff" : "#111",
              }}
            >
              {msg.content}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          border: "1px solid #c7d2fe",
          borderRadius: 999,
          px: 1.5,
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
            "& input::placeholder": {
              color: "#9ca3af",
              opacity: 1,
            },
          }}
        />
        <IconButton
          onClick={() => sendMessage()}
          sx={{
            bgcolor: "#a855f7",
            color: "#fff",
            ml: 1,
            "&:hover": { bgcolor: "#7c3aed" },
          }}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
