import { Box, Typography } from "@mui/material";
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

  const redirect = () => {
    navigate(`/project/${props.title}`);
  };

  return (
    <Box className="card" onClick={redirect} data-aos="fade-up">
      <Typography variant="h6">{props.title}</Typography>
      <img src={props.thumbnail} alt={`${props.title} thumbnail`} />
      <Box sx={{ display: "flex", marginBottom: "20px" }}>
        {props.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <p style={{ margin: "0px 5px" }}>{tag}</p>
            {index < props.tags.length - 1 && <p style={{ margin: "0px 5px" }}>-</p>}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
