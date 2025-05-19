import { useState, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "./style.css";
export default function Navbar() {
  const [_, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 10; // Adjust this value if needed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {!isSmallScreen && (
        <>
          {" "}
          <Box>
            <Link to="/" onClick={() => smoothScroll("")} className="NavLink">
              <h2 className="NavLink">My portfolio</h2>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", marginRight: "20px" }}>
              <Link to="/" onClick={() => smoothScroll("about")} className="NavLink">
                About
              </Link>
              <Link to="/" onClick={() => smoothScroll("education")} className="NavLink">
                Education
              </Link>
              <Link to="/" onClick={() => smoothScroll("experiences")} className="NavLink">
                Experiences
              </Link>
              <Link to="/" onClick={() => smoothScroll("hobbies")} className="NavLink">
                Hobbies
              </Link>
              <Link to="/" onClick={() => smoothScroll("projects")} className="NavLink">
               Projects
              </Link>
              <Link to="/" onClick={() => smoothScroll("contributions")} className="NavLink">
               Contributions
              </Link>
              <Link to="/" onClick={() => smoothScroll("awards")} className="NavLink">
               Awards
              </Link>
              <Link to="/" onClick={() => smoothScroll("contact")} className="NavLink">
                Contact
              </Link>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton className="IcoButton" aria-controls="simple-menu" aria-haspopup="true" href="https://www.linkedin.com/in/thomas-mauran/" target="_blank" sx={{ marginLeft: "20px" }}>
                <LinkedInIcon sx={{ fontSize: "1.7em" }} />
              </IconButton>
              <IconButton className="IcoButton" aria-controls="simple-menu" aria-haspopup="true" href="https://github.com/thomas-mauran/" target="_blank" sx={{ marginLeft: "20px" }}>
                <GitHubIcon fontSize="large" sx={{ fontSize: "1.7em" }}  />
              </IconButton>
              <IconButton className="IcoButton" aria-controls="simple-menu" aria-haspopup="true" href="https://astro.thomas-mauran.com/" target="_blank" sx={{ marginLeft: "20px", marginRight: "20px" }}>
                <RssFeedIcon fontSize="large" sx={{ fontSize: "1.7em" }} />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
