import { Box, Typography, useMediaQuery, Button, Divider } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./style.css";
import Spline from "@splinetool/react-spline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function HomeView() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", overflowX: "hidden" }}>
      {/* First Block */}
      <Box sx={{ display: "flex", alignItems: "center", height: "100vh", marginTop: "-5%", width: "100%" }}>
        <Box sx={{ textAlign: "left", marginLeft: "15%", zIndex: "1000" }}>
          <Box sx={{ marginBottom: "40px" }}>
            <h1>My name is Thomas Mauran 👋</h1>
            <Typography variant="h5" color="initial">
              Fullstack / DevOps engineering apprentice
            </Typography>
          </Box>
          <a href="#about" className="StartBtn">
            Let's start
          </a>
        </Box>
        <Box sx={{ width: "40%", height: "100%", zIndex: "-10", position: "absolute", right: "0", cursor: "pointer" }}>
          <Spline scene="https://prod.spline.design/NNdEJ1ExxMEgxzW0/scene.splinecode" style={{ transform: "scale(0.6)", zIndex: "-100" }} />
        </Box>
      </Box>
      {/* About me  */}
      <Box sx={{ display: "flex", alignItems: "center", height: "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="about">
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <img src="./pfp.png" alt="Profile picture made by midjourney" style={{ width: "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "30%" }}>
            <h1>About me</h1>
            <p style={{ lineHeight: "2em" }}>
              I'm a 21 years old french developper.
              <br />
              <br /> I love computer science and I'm always looking for new challenges. I currently am an apprentice engineer studying DevOps and Software Development in general at Polytech Montpellier. I started in 2022 and will be there until 2025.
              At Polytech, I've been learning both development and operations to get a better understanding of how software development and deployment work in real-life scenarios.
            </p>
          </Box>
        </Box>
      </Box>
      {/* Projects */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="projects">
        <h1>Projects</h1>
        {projectByYears.map((year, index) => {
          return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Divider sx={{ borderColor: "white", width: "400px", margin: "20px" }} />

              <h2>{year.year}</h2>
              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center" }}>
                {year.projects.map((project, index) => {
                  return <ProjectCard key={index} title={project.name} tags={project.tags} thumbnail={project.thumbnailUrl} />;
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* Contact  */}
      <Box sx={{ display: "flex", alignItems: "center", height: "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="contact">
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", marginTop: "-2%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <h1 style={{}}>Contact</h1>
            <Box sx={{ marginTop: "20px" }}>
              <Box sx={{ display: "flex", marginBottom: "30px" }}>
                <LocalPhoneIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial">
                  +33 06 52 86 55 22
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "30px" }}>
                <EmailIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial">
                  thomas.mauran@etu.umontpellier.fr
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <LinkedInIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <a href="https://www.linkedin.com/in/thomas-mauran/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.2em" }}>
                  thomas-mauran
                </a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", marginRight: "100px" }}>
            <img src="https://media.tenor.com/jRcpod5gY0sAAAAC/cat-typing.gif" alt="Cat gif" style={{ width: "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
