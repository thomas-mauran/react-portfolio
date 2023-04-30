import { Box, Divider } from "@mui/material";
import { projectByYears } from "../../utils/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function HomeView() {
  return (
    <Box>
      <h1>List of my projects</h1>
      {projectByYears.map((year, index) => {
        return (
          <Box >
            <h2>{year.year}</h2>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
              {year.projects.map((project, index) => {
                return <ProjectCard key={index} title={project.name} tags={project.tags} thumbnail={project.thumbnailUrl} />;
              })}
            </Box>
            <Divider/>
          </Box>
        );
      })}
    </Box>
  );
}
