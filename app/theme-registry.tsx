"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a855f7" },
    secondary: { main: "#7c3aed" },
    background: {
      default: "#070816",
      paper: "rgba(255,255,255,0.06)",
    },
    text: {
      primary: "#e7eaf3",
      secondary: "rgba(231,234,243,0.72)",
    },
    divider: "rgba(255,255,255,0.10)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "#070816" },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}