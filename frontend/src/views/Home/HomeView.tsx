import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function HomeView() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ display: isSmallScreen ? "block" : "flex", marginBottom: "40px" }}>
        <Typography variant="h2" margin="7px" fontWeight={"bold"}>
          My
        </Typography>
        <Typography
          variant="h2"
          margin="7px"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(135deg, rgba(65,26,247,1) 0%, rgba(149,158,255,1) 0%, rgba(76,26,236,1) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}>
          projects
        </Typography>
      </Box>

      <img src="https://media3.giphy.com/media/Uz4cDaGXPxeuY/giphy.gif?cid=ecf05e472934xp3e7cn5bnp95934sm2azjwdv1ik2cgyj4h8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Ghibli gif" style={{ width: "30%", borderRadius: "10px", minWidth: "300px" }} />
      <Typography variant="body1" color="white" margin={"20px"} sx={{}}>
        You will find here a list of my projects, sorted by year. You can click on a project to see more details about it.
      </Typography>
      {projectByYears.map((year, index) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Divider sx={{ borderColor: "white", width: "400px", margin: "20px" }} />

            <h2>{year.year}</h2>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
              {year.projects.map((project, index) => {
                return <ProjectCard key={index} title={project.name} tags={project.tags} thumbnail={project.thumbnailUrl} />;
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
