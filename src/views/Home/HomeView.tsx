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

export default function HomeView() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  if (!isSmallScreen) {
    AOS.init();
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", overflowX: "hidden" }}>
      {/* First Block */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "80vh" : "100vh", marginTop: "-5%", width: "100%", flexDirection: isSmallScreen ? "column" : "row" }}>
          <Box sx={{ textAlign: isSmallScreen ? "center" : "left", marginLeft: isSmallScreen ? 2 : "15%" }}>
            <Box sx={{ marginBottom: "40px", paddingTop: isSmallScreen ? " 25vh" : "" }}>
              <h1 style={{ fontSize: isSmallScreen ? "2em" : "3.2em" }}>My name is Thomas Mauran 👋</h1>
              <Typography variant="h5" color="initial" sx={{ fontSize: isSmallScreen ? "1.2em" : "1.5em" }}>
                Fullstack / DevOps engineering apprentice
              </Typography>
            </Box>
            <a href="#about" className="StartBtn">
              Let's start
            </a>
          </Box>
          {!isSmallScreen && (
            <Box sx={{ width: "40%", height: "70%", position: "absolute", right: "0", cursor: "pointer" }}>
              <Spline scene="https://prod.spline.design/bHVYiCotRyRwnKZp/scene.splinecode" style={{ transform: "scale(0.8)" }} />
            </Box>
          )}
        </Box>
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* About me  */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./pfp.png" alt="Profile picture made by midjourney" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>About me</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
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
      {/* Education  */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="education">
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Education</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>2022-2025:</b> Computer Engineering degree, Polytech Montpellier
                <br />
                <br />
                <b>2020-2022:</b> Associate's Degree of computer science, IUT of Montpellier
                <br />
                <br />
                <b>2017-2020:</b> Scientific Baccalaureate, Science of life and the earth, Math speciality
                <br />
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./mac.jpg" alt="Old Macintosh" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Experiences */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="experiences">
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./office.jpeg" alt="office picture" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Experiences</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>2022-2025:</b> Fullstack apprentice for <a href="https://kuzzle.io/fr/">Kuzzle</a>
                  <br />
                  Working on multiple projects as a fullstack developer to provide a large variety of features.
                  <br />
                  <br />
                  <b>2020:</b> 3 month internship at CIRAD research center
                  <br />
                  Short internship where I designed and created a wikipedia like platform to handle plasmid classification for the research team.
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
       {/* Hobbies  */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}} id="hobbies">
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Hobbies</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>Astronomy / Physics:</b> 
                <br />
                I am very interested by science in general especially physics and astronomy. I have been reading a lot of great books by stephen hawkings and etienne klein about those subjects 
                and wish to be able to work in that field later as a computer engineer. I also have an old 114/900 newtonian telescope that I am learning how to use. 
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./scope.jpeg" alt="Profile picture made by midjourney" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000", marginBottom: "40px", marginTop: "40px" }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./tennis.jpg" alt="Profile picture made by midjourney" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>Tennis:</b> 
                <br />
                I've been playing tennis at my local club for more than 12 years now, and I absolutely love it, 
                especially in the summer! Tennis is more than just a game to me—it's super fun and keeps me active. 
                I really enjoy playing and I'm looking forward to many more years of fun on the court!
                Throughout the years I have been doing many sport like rowing or badminton, but tennis has always been
                my personal favorite.
                <br />
                <br />
              </p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <b>French horn:</b> 
                <br />
                I've been playing the French horn for more than 12 years now, starting off at my local music school and 
                playing as part of orchestras of different sizes along the way. This discipline
                teached me about discipline, perseverance, and the joy of making music. 
                <br />
                <br />
                
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./french-horn.jpg" alt="french horn on a music sheet" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000", marginBottom: "40px" }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
            <img src="./chess.jpg" alt="Profile picture made by midjourney" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <b>Chess:</b> 
                <br />
                I'm really into chess and I play it whenever I can in my free time. 
                Recently, I've been working on this cool project called chess-tui in Rust.
                 You can find more info about it <a href="/project/Chess-tui">here</a>.
                 It's been a great way to dive deeper into the game and coding at the same time. 
                <br />
              </p>
            </Box>
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Projects */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#F5F5F5", paddingTop: "75px"}} id="projects">
        <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Projects</h1>
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="projects">
      <div className="custom-shape-divider-bottom-23">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>

      {/* Contact  */}
      <Box sx={{ display: "flex", alignItems: "center", height: "85vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="contact">
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", marginTop: "-2%", flexDirection: isSmallScreen ? "column" : "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", alignItems: isSmallScreen ? "center" : "" }}>
            <h1 style={{}} data-aos={isSmallScreen ? "" : "fade-up"}>
              Contact
            </h1>
            {isSmallScreen && (
              <Box sx={{ display: "flex", flexDirection: "column", marginRight: isSmallScreen ? "" : "100px", marginTop: isSmallScreen ? "10px" : "", marginBottom: isSmallScreen ? "30px" : "" }}>
                <img
                  src="https://media.tenor.com/jRcpod5gY0sAAAAC/cat-typing.gif"
                  alt="Cat gif"
                  style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }}
                  data-aos={isSmallScreen ? "" : "fade-up"}
                />
              </Box>
            )}
            <Box sx={{ marginTop: "20px" }}>
              <Box sx={{ display: "flex", marginBottom: "30px" }} data-aos={isSmallScreen ? "" : "fade-right"}>
                <LocalPhoneIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial" sx={{ fontSize: isSmallScreen ? "1em" : "1.2em" }}>
                  +33 06 95 15 48 70
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginBottom: "30px" }} data-aos={isSmallScreen ? "" : "fade-right"}>
                <EmailIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial" sx={{ fontSize: isSmallScreen ? "1em" : "1.2em" }}>
                  thomas.mauran@etu.umontpellier.fr
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }} data-aos={isSmallScreen ? "" : "fade-right"}>
                <LinkedInIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <a href="https://www.linkedin.com/in/thomas-mauran/" target="_blank" rel="noopener noreferrer" style={{ fontSize: isSmallScreen ? "1em" : "1.2em" }}>
                  thomas-mauran
                </a>
              </Box>
            </Box>
          </Box>
          {!isSmallScreen && (
            <Box sx={{ display: "flex", flexDirection: "column", marginRight: isSmallScreen ? "" : "100px" }}>
              <img
                src="https://media.tenor.com/jRcpod5gY0sAAAAC/cat-typing.gif"
                alt="Cat gif"
                style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }}
                data-aos={isSmallScreen ? "" : "fade-up"}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#f5f5f5", width: "100%" }}>
        <p>Made with ❤️ by Thomas Mauran © 2024</p>
      </Box>
    </Box>
  );
}
