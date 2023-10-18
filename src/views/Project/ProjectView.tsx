import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { project } from "../../utils/projects";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export default function ProjectView() {
  const [project, setProject] = useState<project>({} as project);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const params = useParams();

  useEffect(() => {
    projectByYears.map((year) => {
      year.projects.map((project) => {
        if (project.name === params.title) {
          setProject(project);
        }
      });
    });
  }, [params.title]);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        {project.name}
      </Typography>
      <Box display="flex" alignItems="center" margin={"50px"} sx={{ display: isSmallScreen ? "inline" : "flex" }}>
        <Box mr={20} sx={{ display: isSmallScreen ? "none" : "inline", width: "50vw" }}>
          <Typography variant="subtitle1" sx={{ fontSize: "1.2em", textAlign: "left" }} gutterBottom>
            <b>Description: </b>
            <br />

            {project.description}
          </Typography>
          <br />

          <Typography variant="subtitle1" sx={{ fontSize: "1.2em" }} gutterBottom>
            Tags:{" "}
            {project.tags?.map((tag, index) => {
              return <Chip key={index} label={tag} color="primary" sx={{ marginRight: "10px" }} />;
            })}
          </Typography>
        </Box>

        <Box sx={{ width: "50vw" }}>
          <img src={project.thumbnailUrl} alt={project.name} style={{ width: "35vw", borderRadius: "10px", minWidth: "400px", margin: "40px" }} />
          <Box mr={isSmallScreen ? 0 : 20} sx={{ display: isSmallScreen ? "flex" : "none", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="subtitle1" sx={{ fontSize: "1.2em", textAlign: "left", margin: "40px" }} gutterBottom>
              <b>Description: </b>
              <br />

              {project.description}
            </Typography>
            <br />

            <Typography variant="subtitle1" sx={{ fontSize: "1.2em", margin: "40px" }} gutterBottom>
              Tags:{" "}
              {project.tags?.map((tag, index) => {
                return <Chip key={index} label={tag} color="primary" sx={{ marginRight: "10px" }} />;
              })}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {project.prodUrl && (
              <Typography variant="subtitle1" sx={{ fontSize: "1.2em" }} gutterBottom>
                Production url:
                <IconButton href={project.prodUrl} target="_blank" rel="noopener noreferrer">
                  <LanguageIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Typography>
            )}
            {project.sourceUrl && (
              <Typography variant="subtitle1" sx={{ fontSize: "1.2em" }} gutterBottom>
                Source code:
                <IconButton href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={{ color: "white", fontSize: "40px" }} />
                </IconButton>
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
