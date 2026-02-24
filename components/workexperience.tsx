"use client";

import { Box, Typography, Card, CardContent, Stack } from "@mui/material";

export default function WorkExperience() {
  const jobs = [
    {
      role: "STEM Student Assistant",
      org: "Southeastern Northshore STEM Center",
      period: "Sep 2025 – Present",
      bullets: [
        "Supported students with emerging technologies including Arduino projects, NVIDIA Jetson-based robotics, and hardware systems",
        "Guided students in using VR/AR simulators, including flight and welding simulations",
        "Promoted STEM engagement and technology literacy through interactive learning",
        "Assisted in delivering hands-on STEM workshops",
      ],
    },
    {
      role: "Computer Science Tutor",
      org: "Southeastern Louisiana University",
      period: "Feb 2025 – Dec 2025",
      bullets: [
        "Provided individualized tutoring in programming fundamentals, data structures, and algorithms",
        "Simplified complex topics including object-oriented programming and database concepts",
        "Helped students strengthen problem-solving and coding skills",
      ],
    },
    {
      role: "Network Support Student Assistant | IT Solutions",
      org: "Southeastern Louisiana University",
      period: "May 2025 – Sep 2025",
      bullets: [
        "Troubleshot Wi-Fi connectivity issues across residence halls to ensure reliable network access",
        "Performed diagnostic checks and repairs on Ethernet cable infrastructure",
        "Coordinated with network engineering staff to resolve access point (AP) outages",
        "Communicated effectively with residents and IT personnel to implement technical solutions",
      ],
    },
    {
      role: "Student Assistant | Math Department",
      org: "Southeastern Louisiana University",
      period: "Aug 2023 – Sep 2025",
      bullets: [
        "Answered and directed incoming departmental calls while maintaining accurate records",
        "Collected, sorted, and distributed departmental mail",
        "Served as the first point of contact for visitors and student inquiries",
        "Provided information regarding courses, faculty hours, and department policies",
      ],
    },
    {
      role: "Front Desk Math Lab | Math Department",
      org: "Southeastern Louisiana University",
      period: "Aug 2023 – Jan 2024",
      bullets: [
        "Checked students in/out and accurately tracked lab attendance hours",
        "Informed students of total Math Lab hours and explained lab policies",
        "Guided students on monitoring their lab usage through the system",
      ],
    },
  ];

  return (
    <Box sx={{ py: 1 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Work Experience
      </Typography>

      <Stack spacing={2}>
        {jobs.map((job, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <CardContent>
              <Typography fontWeight={600}>{job.role}</Typography>

              <Typography variant="body2" color="text.secondary">
                {job.org}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#7c3aed",
                  fontWeight: 500,
                }}
              >
                {job.period}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {job.bullets.map((bullet, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body2"
                    sx={{ mb: 0.5 }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}