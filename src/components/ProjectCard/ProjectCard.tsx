import { Box, Typography, Chip } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";

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
    <Box className="card" onClick={redirect}>
      <img src={props.thumbnail} alt={`${props.title} thumbnail`} />
      <Typography variant="h6">{props.title}</Typography>
      <Box>
        {props.tags.map((tag, index) => {
          return <Chip key={index} label={tag} color="primary" sx={{ margin: "5px 10px", borderRadius: "10px" }} />;
        })}
      </Box>
    </Box>
  );
}