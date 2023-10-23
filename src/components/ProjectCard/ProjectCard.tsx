import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import "./style.css";
import React from "react";

interface ProjectCardProps {
  title: string;
  thumbnail?: string;
  tags: string[];
}

export default function AddTime(props: ProjectCardProps) {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const redirect = () => {
    navigate(`/project/${props.title}`);
  };

  return (
    <Box className="card" onClick={redirect} data-aos={isSmallScreen ? "" : "fade-up"}>
      <Typography variant="h6" align="center">
        {props.title}
      </Typography>
      <img src={props.thumbnail} alt={`${props.title} thumbnail`} />
      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "20px", alignItems: "center", justifyContent: "center" }}>
        {props.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Typography style={{ margin: "0px 5px" }}>{tag}</Typography>
            {index < props.tags.length - 1 && <Typography style={{ margin: "0px 5px" }}>-</Typography>}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
