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
import { Link } from "react-router-dom";

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
              <Typography variant="h5" color="initial" sx={{ fontSize: isSmallScreen ? "1.2em" : "1.5em", marginTop: "20px" }}>
                DevOps Engineer
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
                I'm a 22 years old french developper.
                <br />
                <br /> I love computer science and I'm always looking for new challenges. I currently am an apprentice engineer studying <b className="purple">DevOps</b> and Software Development in general at Polytech Montpellier. I started in 2022
                and will be there until 2025.
                <br />
                In life I am <b className="purple">curious</b> and willing to learn anything new especially when it is related to science or history.
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100vw" }} id="education">
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "20%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Education</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>2022-2025:</b> DevOps Engineering degree, Polytech Montpellier
                <br />
                <i>Selective Engineering School, Montpellier, France</i>
                <br />
                <br />
                <b>2020-2022:</b> 2 year qualification in computer science, IUT of Montpellier
                <br />
                <i>University Institute of Technology (IUT) Montpellier, France</i>
                <br />
                <br />
                <b>2017-2020:</b> Scientific Baccalaureate, Science of life and the earth, Math speciality
                <br />
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./fac.jpg" alt="Old Macintosh" style={{ width: isSmallScreen ? "300px" : "500px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-1697903916">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Honors & Awards */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100vw", backgroundColor: "#F5F5F5" }} id="honors">
        <Box sx={{ display: "flex", alignItems: "center", minHeight: isSmallScreen ? "auto" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5", py: isSmallScreen ? 6 : 8 }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "", gap: isSmallScreen ? 4 : 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "20%", zIndex: "100", width: "100%" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"} style={{ textAlign: isSmallScreen ? "center" : "left", marginBottom: "20px" }}>Honors & Awards</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>3rd Place - CTF OpenCycom (2025)</b>
                <br />
                <u>Description:</u> Achieved third place in the OpenCycom Capture The Flag competition.
                <br />
                <br />
                <b>1st Place - 3DS OUTSCALE Challenge (2024)</b>
                <br />
                <u>Description:</u> Won first place in the 3DS OUTSCALE challenge during the Nuit de l'info 2024.
                <br />
                <br />
                <b>1st Place - MIPIHSIB Challenge (2024)</b>
                <br />
                <u>Description:</u> Won first place in the MIPIHSIB challenge during the Nuit de l'info 2024.
                <br />
                <br />
                <b>3rd Place - Thales Rust Hackathon (2024)</b>
                <br />
                <u>Description:</u> Achieved third place in the Thales Rust Hackathon focused on cybersecurity.
                <br />
                <br />
                <b>1st Place - ASI Challenge (2023)</b>
                <br />
                <u>Description:</u> Won first place in the ASI challenge during the Nuit de l'info 2023.
                <br />
                <br />
                <b>1st Place - Airbus Challenge (2023)</b>
                <br />
                <u>Description:</u> Won first place in the Airbus challenge during the Nuit de l'info 2023.
                <br />
                <br />
                <b>2nd Place - "Met du green dans ton it" Challenge (2022)</b>
                <br />
                <u>Description:</u> Secured second place in the challenge focused on reducing website carbon footprint.
                <br />
                <br />
                <b>1st Place - DevOps Heroes Hackathon (2022)</b>
                <br />
                <u>Description:</u> Won first place in the DevOps Heroes hackathon organized by CA-GIP at Epitech Montpellier.
                <br />
                <br />
                <b>4th Place - Nuit de l'info Challenge (2021)</b>
                <br />
                <u>Description:</u> Created a Three.js animation for the Nuit de l'info 2021 challenge.
                <br />
                <br />
                <b>1st Place - Navigation Bar Design Challenge (2020)</b>
                <br />
                <u>Description:</u> Won first place in the innovative navigation bar design challenge during the Nuit de l'info 2020.
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img 
                src="./cern-award.jpg" 
                alt="CERN Award" 
                style={{ 
                  width: isSmallScreen ? "300px" : "500px", 
                  borderRadius: "10px", 
                  boxShadow: "4px 4px 20px -3px #000000",
                  marginTop: isSmallScreen ? 4 : 0
                }} 
              />
            </Box>
          </Box>
        </Box>
        <div className="custom-shape-divider-bottom-23">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Experiences */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#F5F5F5", width: "100vw" }} id="experiences">
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          marginTop: "100px", 
          minHeight: isSmallScreen ? "auto" : "100vh", 
          zIndex: 1000, 
          width: "100%", 
          backgroundColor: "#F5F5F5",
          pb: isSmallScreen ? 6 : 0
        }} id="about">
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            width: "100%", 
            padding: "0 10%", 
            flexDirection: isSmallScreen ? "column" : "row", 
            alignItems: isSmallScreen ? "center" : "",
            gap: isSmallScreen ? 4 : 0
          }}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              textAlign: isSmallScreen ? "center " : "left", 
              marginRight: isSmallScreen ? 0 : "20%", 
              zIndex: "100",
              width: "100%"
            }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Experiences</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>Summer 2024 - CERN Openlab internship</b>
                <br />
                During the summer of 2024 I had the immense chance to be selected in the{" "}
                <a href="https://openlab.cern/" style={{ textDecoration: "underline" }}>
                  Openlab summer student program
                </a>{" "}
                to work at <b className="purple">CERN</b>.
                <br />
                As a big fan of physics and astronomy, this was a dream come true for me.
                <br />
                <br />I worked on the{" "}
                <a href="https://cds.cern.ch/record/2906873" style={{ textDecoration: "underline" }}>
                  Evaluation of Apache Knox with CERN SSO
                </a>
                . The project went smoothly and I had the time to go further than the evaluation and implement a major part of the solution which is now running in production.
                <br />
                <br />
                Key achievements:
                <br />
                • Secured critical data services (Hadoop YARN, HDFS, MapReduce History, HBase, Spark History Server) using <b>Apache Knox</b> as a reverse proxy
                <br />
                • Integrated CERN Single Sign-On (<b>SSO</b>) with <b>Apache Knox</b> to centralize and simplify access management
                <br />
                • Ensured high availability (<b>HA</b>) for all services, improving reliability and system uptime
                <br />
                • Implemented auditing and monitoring mechanisms to log access and track security events
                <br />
                • Delivered technical presentations to engineering teams and students at CERN
                <br />
                <br />
                This internship was an amazing experience, I was surrounded by very interesting people from all around the world, I was in the middle of the biggest scientific experiment in the world and I had the chance to work on a project that will
                be used by thousands of people.
                <br />
                The Openlab program also allowed me to visit multiple experiments such as <i>ATLAS and ALICE control centers </i>, <i> the Proton Sychrotron</i>, <i>LINAC 1</i>, <i>CCC</i> and the <i>Antimatter factory</i>
                <br />
                On top of that we have been able to attend tons of conferences and participates in multiple workshops.
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img
                src="./me-cern.png"
                alt="Me at CERN"
                style={{ width: isSmallScreen ? "200px" : "500px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000", marginBottom: "40px", marginTop: "40px" }}
                className="hover-picture"
                onClick={() => (window.location.href = "https://openlab.cern/news/20-aug-2024/fostering-future-careers-stem-through-cern-openlab-summer-student-programme")}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          minHeight: isSmallScreen ? "auto" : "80vh", 
          zIndex: 1000, 
          width: "100%", 
          backgroundColor: "#F5F5F5", 
          marginTop: isSmallScreen ? 4 : "50px",
          pb: isSmallScreen ? 6 : 0
        }} id="about">
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            width: "100%", 
            padding: "0 10%", 
            flexDirection: isSmallScreen ? "column" : "row", 
            alignItems: isSmallScreen ? "center" : "",
            gap: isSmallScreen ? 4 : 0
          }}>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./kuzzle.webp" alt="Kuzzle logo" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", marginTop: "50%" }} className="hover-picture" onClick={() => (window.location.href = "https://kuzzle.io/fr/")} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "20%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>2022 - 2025: Apprenticeship at Kuzzle</b>
                <br />
                From 2022 to 2025 I have been working as a fullstack developer apprentice at Kuzzle.
                <br />
                Kuzzle is originally a french startup that provides an opensource backend solution, with the years we also developed a SaaS solution called the Iot-platform that allows our customers to aggregate and analyze their Iot data in a single
                platform.
                <br />
                <br />
                Key achievements:
                <br />
                • Provisioned and managed <b>Kubernetes</b> production environments using <b>Terraform</b> and <b>Ansible</b>, following Infrastructure as Code (<b>IaC</b>) best practices
                <br />
                • Designed and implemented distributed tracing and monitoring with <b>Istio</b> and the <b>LGTM</b> stack (<b>Loki</b>, <b>Grafana</b>, <b>Tempo</b>, <b>Mimir</b>)
                <br />
                • Optimized <b>CI/CD</b> pipelines, reducing build and deployment times by over 60%
                <br />
                • Developed and enhanced key features for an IoT dashboarding platform using <b>Vue.js</b>, improving UX and performance
                <br />
                • Contributed to the core backend of the open-source <b>Kuzzle</b> framework, identifying and resolving critical issues affecting system stability
                <br />
                <br />
                Throughout the years I have been working on multiple projects such as client projects (SPIE, Omniscient, Ales city, Eiffage), internal tools, and the IoT-platform itself.
                <br />
                <br />I have been learning a lot about the software development process, the <b>DevOps</b> culture and how to efficiently work and release software in a team.
              </p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          minHeight: isSmallScreen ? "auto" : "80vh", 
          zIndex: 1000, 
          width: "100%", 
          backgroundColor: "#F5F5F5",
          pb: isSmallScreen ? 6 : 0
        }} id="about">
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            width: "100%", 
            padding: "0 10%", 
            flexDirection: isSmallScreen ? "column" : "row", 
            alignItems: isSmallScreen ? "center" : "",
            gap: isSmallScreen ? 4 : 0
          }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "20%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>2022 - Fullstack internship at CIRAD</b>
                <br />
                The CIRAD (International Cooperation Center for Agricultural Research for Development) is a french research center that works on multiple projects to help developping countries.
                <br />
                <br />
                Key achievements:
                <br />
                • Designed and built a custom platform for plasmid classification, inspired by Wikipedia
                <br />
                • Implemented version control and collaboration workflows using <b>GitHub</b>
                <br />
                • Leveraged <b>Docker</b> for containerization, ensuring consistent environment and efficient deployment
                <br />
                <br />
                This internship was a very good experience for me, I was able to work work closely with real clients (the biologists) to really provide them a tool suitable for their needs.
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img
                src="./cirad.png"
                alt="Cirad logo"
                style={{ width: isSmallScreen ? "200px" : "500px", borderRadius: "10px", marginBottom: "40px", marginTop: "25%" }}
                className="hover-picture"
                onClick={() => (window.location.href = "https://www.cirad.fr/")}
              />
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} id="hobbies">
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "20%", zIndex: "100" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"}>Hobbies</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>Astrophotography / Physics:</b>
                <br />I am very interested by science in general especially physics and astronomy. I have been reading a lot of great books by Stephen Hawkings and Etienne Klein about those subjects and wish to be able to work in that field later as
                a computer engineer. I also have an astrophotography setup that I use to take pictures of the sky such as the helix nebula you see here.
                <br />I post every picture that I take on this the following{" "}
                <a href="https://astro.thomas-mauran.com/" className="purple">
                  blog
                </a>
                <br />
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img
                src="./helix.png"
                alt="Helix nebula shot I made"
                style={{
                  width: isSmallScreen ? "200px" : "500px",
                  borderRadius: "10px",
                  boxShadow: "4px 4px 20px -3px #000000",
                  marginBottom: "40px",
                  marginTop: "40px",
                }}
                className="hover-picture"
                onClick={() => (window.location.href = "https://astro.thomas-mauran.com/p/helix-nebula/")}
              />
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
                I've been playing tennis at my local club for more than 12 years now, and I absolutely love it, especially in the summer! Tennis is more than just a game to me—it's super fun and keeps me active. I really enjoy playing and I'm looking
                forward to many more years of fun on the court! Throughout the years I have been doing many sport like rowing or badminton, but tennis has always been my personal favorite.
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
                I've been playing the French horn for more than 12 years now, starting off at my local music school and playing as part of orchestras of different sizes along the way. This discipline teached me about discipline, perseverance, and the
                joy of making music.
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
              <img src="./books.jpg" alt="Profile picture made by midjourney" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginLeft: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <b>Reading:</b>
                <br />I love reading, especially physics or astronomy related. Among my top favorite I would put <i>A brief history of time</i> by Stephen Hawkings, <i>La nouvelle physique</i> from Yann Mambrini but also <i>Le prince</i> from
                Machiavel.
                <br />
              </p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: isSmallScreen ? "100vh" : "80vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF" }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "30%", zIndex: "100" }}>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <b>Hiking:</b>
                <br />I love hiking and being in the nature, during my CERN internship in Switzerland I had the chance to hike and do bivouacs in the Alps which was an amazing experience.
              </p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }} data-aos={isSmallScreen ? "" : "fade-up"}>
              <img src="./hiking.png" alt="french horn on a music sheet" style={{ width: isSmallScreen ? "200px" : "400px", borderRadius: "10px", boxShadow: "4px 4px 20px -3px #000000", marginBottom: "40px" }} />
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#F5F5F5", paddingTop: "75px", width: "100vw" }} id="projects">
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
        <div className="custom-shape-divider-bottom-23">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      {/* Contributions */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "85vh",
          zIndex: 1000,
          width: "100%",
          backgroundColor: "#FFFFFF",
          marginTop: 10,
        }}
        id="contributions">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "0 10%",
            marginTop: isSmallScreen ? "10%" : "-2%",
            flexDirection: isSmallScreen ? "column" : "row",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}>
            <h1>Contributions</h1>

            <Box sx={{ marginBottom: 3, marginTop: "20px", textAlign: "left", width: "100%" }}>
              <h2 style={{ marginBottom: 20 }}>Open Source:</h2>
              <p>
                <div style={{ marginBottom: 20 }} data-aos={isSmallScreen ? "" : "fade-right"}>
                  <b>Chess TUI:</b>{" "}
                  <Link to="https://github.com/thomas-mauran/chess-tui" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>
                    GitHub Repository
                  </Link>{" "}
                  (Rust)
                  <br />
                  <u>Description:</u> I created and am maintaining a Chess-tui wich is a terminal chess game written in Rust.
                </div>
                <div style={{ marginBottom: 20 }} data-aos={isSmallScreen ? "" : "fade-right"}>
                  <b>Node JS:</b>{" "}
                  <Link to="https://github.com/nodejs/node/pull/52225" target="_blank" rel="noopener noreferrer">
                    PR #52225
                  </Link>{" "}
                  (JS)
                  <br />
                  <u>Description:</u> Node JS is a runtime environment that allows you to run JavaScript on the server side. I contributed to the project by adding custom log message when using the .load and .save method of the repl when no file was
                  provided.
                </div>
                <div style={{ marginBottom: 20 }} data-aos={isSmallScreen ? "" : "fade-right"}>
                  <b>NASA/harmony:</b>{" "}
                  <Link to="https://github.com/nasa/harmony/pull/647" target="_blank" rel="noopener noreferrer">
                    PR #647
                  </Link>{" "}
                  (JS)
                  <br />
                  <u>Description:</u> Harmony is a project from NASA that aims to provide a platform for the scientific community to access and analyze Earth Science data. I contributed to the project by removing nodemon dependency and using the node
                  --watch flag instead.
                </div>
              </p>
            </Box>

            <Box sx={{ marginBottom: 3, marginTop: "20px", textAlign: "left", width: "100%" }}>
              <h2 style={{ marginBottom: 20 }}>Wikipedia:</h2>

              <p>
                <div style={{ marginBottom: 20 }} data-aos={isSmallScreen ? "" : "fade-right"}>
                  <strong>Toshifumi Hinata:</strong>{" "}
                  <Link to="https://fr.wikipedia.org/wiki/Toshifumi_Hinata#" target="_blank" rel="noopener noreferrer">
                    Article
                  </Link>
                  <br />
                  <u>Description:</u> I created the wikipedia page of Toshifumi Hinata, a famous japanese composer that I enjoy listening to.
                </div>
                <div style={{ marginBottom: 20 }} data-aos={isSmallScreen ? "" : "fade-right"}>
                  <strong>Hommage à confucius:</strong>{" "}
                  <Link to="https://fr.wikipedia.org/wiki/Hommage_%C3%A0_Confucius" target="_blank" rel="noopener noreferrer">
                    Article
                  </Link>
                  <br />
                  <u>Description:</u> I modified the wikipedia page of the french art statue "Hommage à Confucius" to add a picture and a commonly used name.
                </div>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Awards */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100vw", backgroundColor: "#FFFFFF" }} id="awards">
        <Box sx={{ display: "flex", alignItems: "center", minHeight: isSmallScreen ? "auto" : "100vh", zIndex: 1000, width: "100%", backgroundColor: "#FFFFFF", py: isSmallScreen ? 6 : 8 }} id="about">
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10%", flexDirection: isSmallScreen ? "column" : "row", alignItems: isSmallScreen ? "center" : "", gap: isSmallScreen ? 4 : 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: isSmallScreen ? "center " : "left", marginRight: isSmallScreen ? 0 : "20%", zIndex: "100", width: "100%" }}>
              <h1 data-aos={isSmallScreen ? "" : "fade-up"} style={{ textAlign: isSmallScreen ? "center" : "left", marginBottom: "20px" }}>Awards & Achievements</h1>
              <p style={{ lineHeight: "2em" }} data-aos={isSmallScreen ? "" : "fade-up"}>
                <br />
                <b>3rd Place - CTF OpenCycom (2025)</b>
                <br />
                <u>Description:</u> Achieved third place in the OpenCycom Capture The Flag competition.
                <br />
                <br />
                <b>1st Place - 3DS OUTSCALE Challenge (2024)</b>
                <br />
                <u>Description:</u> Won first place in the 3DS OUTSCALE challenge during the Nuit de l'info 2024.
                <br />
                <br />
                <b>1st Place - MIPIHSIB Challenge (2024)</b>
                <br />
                <u>Description:</u> Won first place in the MIPIHSIB challenge during the Nuit de l'info 2024.
                <br />
                <br />
                <b>3rd Place - Thales Rust Hackathon (2024)</b>
                <br />
                <u>Description:</u> Achieved third place in the Thales Rust Hackathon focused on cybersecurity.
                <br />
                <br />
                <b>1st Place - ASI Challenge (2023)</b>
                <br />
                <u>Description:</u> Won first place in the ASI challenge during the Nuit de l'info 2023.
                <br />
                <br />
                <b>1st Place - Airbus Challenge (2023)</b>
                <br />
                <u>Description:</u> Won first place in the Airbus challenge during the Nuit de l'info 2023.
                <br />
                <br />
                <b>2nd Place - "Met du green dans ton it" Challenge (2022)</b>
                <br />
                <u>Description:</u> Secured second place in the challenge focused on reducing website carbon footprint.
                <br />
                <br />
                <b>1st Place - DevOps Heroes Hackathon (2022)</b>
                <br />
                <u>Description:</u> Won first place in the DevOps Heroes hackathon organized by CA-GIP at Epitech Montpellier.
                <br />
                <br />
                <b>4th Place - Nuit de l'info Challenge (2021)</b>
                <br />
                <u>Description:</u> Created a Three.js animation for the Nuit de l'info 2021 challenge.
                <br />
                <br />
                <b>1st Place - Navigation Bar Design Challenge (2020)</b>
                <br />
                <u>Description:</u> Won first place in the innovative navigation bar design challenge during the Nuit de l'info 2020.
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

      {/* Contact  */}
      <Box sx={{ display: "flex", alignItems: "center", height: "85vh", zIndex: 1000, width: "100%", backgroundColor: "#F5F5F5" }} id="contact">
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
              <Box sx={{ display: "flex", marginBottom: "40px" }} data-aos={isSmallScreen ? "" : "fade-right"}>
                <EmailIcon sx={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                <Typography variant="h6" color="initial" sx={{ fontSize: isSmallScreen ? "1em" : "1.2em" }}>
                  thomasmauran@yahoo.com
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
      <Box sx={{ backgroundColor: "#F5F5F5", width: "100%" }}>
        <p>Made with ❤️ by Thomas Mauran © 2025</p>
      </Box>
    </Box>
  );
}
