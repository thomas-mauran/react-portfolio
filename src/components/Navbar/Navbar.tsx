import { useState, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
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
              <h2 className="NavLink">Thomas Mauran</h2>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", marginRight: "20px" }}>
              <Link to="/" onClick={() => smoothScroll("about")} className="NavLink">
                about
              </Link>
              <Link to="/" onClick={() => smoothScroll("projects")} className="NavLink">
                projects
              </Link>
              <Link to="/" onClick={() => smoothScroll("contact")} className="NavLink">
                contact
              </Link>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={() => window.open("https://www.linkedin.com/in/thomas-mauran/", "_blank")} sx={{ marginLeft: "20px" }}>
                <LinkedInIcon sx={{ fontSize: "1.7em" }} />
              </IconButton>
              <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={() => window.open("https://github.com/thomas-mauran/", "_blank")} sx={{ marginLeft: "20px", marginRight: "20px" }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
