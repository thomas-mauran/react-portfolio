import { Box, Typography, useMediaQuery, Button, Divider } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./style.css";
import Spline from "@splinetool/react-spline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function HomeView() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", overflowX: "hidden" }}>
      {/* First Block */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", height: "100vh", marginTop: "-5%", width: "100%" }}>
          <Box sx={{ textAlign: "left", marginLeft: "15%" }}>
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
          <Box sx={{ width: "40%", height: "70%", position: "absolute", right: "0", cursor: "pointer" }}>
            <Spline scene="https://prod.spline.design/bHVYiCotRyRwnKZp/scene.splinecode" style={{ transform: "scale(1)" }} />
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* About me  */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", height: "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos="fade-up">
              <img src="./pfp.png" alt="Profile picture made by midjourney" style={{ width: "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "30%", zIndex: "100" }}>
              <h1 data-aos="fade-up">About me</h1>
              <p style={{ lineHeight: "2em" }} data-aos="fade-up">
                I'm a 21 years old french developper.
                <br />
                <br /> I love computer science and I'm always looking for new challenges. I currently am an apprentice engineer studying DevOps and Software Development in general at Polytech Montpellier. I started in 2022 and will be there until
                2025. At Polytech, I've been learning both development and operations to get a better understanding of how software development and deployment work in real-life scenarios.
              </p>
            </Box>
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-23">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Projects */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="projects">
        <h1 data-aos="fade-up">Projects</h1>
        {projectByYears.map((year, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Divider sx={{ borderColor: "black", width: "400px", margin: "20px" }} />
            <h2>{year.year}</h2>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center" }}>
              {year.projects.map((project, index) => (
                <ProjectCard key={index} title={project.name} tags={project.tags} thumbnail={project.thumbnailUrl} />
              ))}
            </Box>
          </Box>
        ))}
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>

      {/* Contact  */}
      <Box sx={{ display: "flex", alignItems: "center", height: "85vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="contact">
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", marginTop: "-2%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <h1 style={{}} data-aos="fade-up">
              Contact
            </h1>
            <Box sx={{ marginTop: "20px" }}>
              <Box sx={{ display: "flex", marginBottom: "30px" }} data-aos="fade-right">
                <LocalPhoneIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial">
                  +33 06 52 86 55 22
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "30px" }} data-aos="fade-right">
                <EmailIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial">
                  thomas.mauran@etu.umontpellier.fr
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }} data-aos="fade-right">
                <LinkedInIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <a href="https://www.linkedin.com/in/thomas-mauran/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.2em" }}>
                  thomas-mauran
                </a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", marginRight: "100px" }}>
            <img src="https://media.tenor.com/jRcpod5gY0sAAAAC/cat-typing.gif" alt="Cat gif" style={{ width: "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} data-aos="fade-up" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#f5f5f5", width: "100%" }}>
        <p>Made with ❤️ by Thomas Mauran © 2023</p>
      </Box>
    </Box>
  );
}
