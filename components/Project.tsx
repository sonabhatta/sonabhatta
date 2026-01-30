"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";

const projects = [
  {
    title: "Event Management Platform",
    description:
      "Developed a campus platform for students to discover, share, and organize events. Built a responsive UI with Material-UI and implemented RESTful APIs in .NET/C#. Managed event data across multiple SQL databases.",
    technologies: [
      ".NET",
      "React",
      "TypeScript",
      "Material-UI",
      "C#",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Lions Den Cinema",
    description:
      "Built a full-stack theater management application for scheduling, reservations, ticketing, and concession ordering. Developed mobile and web UIs with React and Expo (including dark mode), secured REST APIs, and deployed using Azure CI/CD pipelines.",
    technologies: [
      ".NET",
      "C#",
      "React",
      "TypeScript",
      "Expo",
      "Azure SQL",
      "GitHub Actions",
      "Azure App Services",
    ],
  },
  {
    title: "Interview Analyzer",
    description:
      "Developed an AI-powered interview practice tool that converts spoken responses into transcripts, detects emotions and filler words, and generates structured feedback through an interactive dashboard to improve communication skills.",
    technologies: [
      "Whisper Large V3",
      "XLSR Wav2Vec2",
      "Google Gemini API",
      "Speech-to-Text",
      "Emotion Detection",
    ],
  },
];

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign="center"
      >
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={2}
                >
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
