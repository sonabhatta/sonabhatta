import { Box, Typography, Chip, Button, Grid } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useRouter } from "next/navigation";

export default function AboutMe() {
  const router = useRouter();

  const handleViewPortfolio = () => {
    router.push("/");
  };

  const skills = [
    "Networking",
    "Databases",
    "Web Development",
    "Women in Tech Advocate",
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      {/* HERO / INTRO */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          Sona Bhatta
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 0.5 }}>
          Junior | Information Technology | Graduating May 2027 | Incoming
          Network Services Engineering Intern @ Cleco
        </Typography>
      </Box>

      {/* SKILLS */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {skills.map((skill) => (
          <Grid size={{ xs: 6, sm: 3 }} key={skill}>
            <Chip
              icon={<AutoAwesomeIcon />}
              label={skill}
              color="primary"
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>

      {/* ABOUT TEXT */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Hi! I am Sona Bhatta, a Junior Information Technology student graduating
          in May 2027. I am passionate about exploring the ever-evolving world of
          technology, with a particular interest in networking, databases, and
          web development.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          As a tech enthusiast, I enjoy taking on new challenges, learning
          innovative solutions, and applying my skills to real-world projects. I
          am especially committed to supporting women in tech, believing that
          diversity and inclusion drive creativity and progress in the industry.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Beyond academics, I stay engaged with emerging technologies, experiment
          with coding projects, and connect with like-minded individuals who
          share a passion for technology and problem-solving.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          I am excited to continue growing as a developer, contributing to
          meaningful projects, and making a positive impact in the tech
          community.
        </Typography>
      </Box>

      {/* CTA BUTTONS */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            borderRadius: 999,
            textTransform: "none",
            px: 3,
            py: 1,
          }}
          component="a"
          href="/Sona_Bhatta_Resume.pdf"
          download
        >
          Download Resume
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            px: 3,
            py: 1,
          }}
          onClick={handleViewPortfolio}
        >
          View Portfolio
        </Button>
      </Box>
    </Box>
  );
}
