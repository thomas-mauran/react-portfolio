import { Box,Typography, Chip } from "@mui/material";
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

//   const handleTagClick = (event: any) => {
//     event.stopPropagation();
//     navigate(`/tag/${event.target.innerText}`);
//   };

  return (
    <Box className="card" onClick={redirect}>
      <Typography variant="h6">{props.title}</Typography>
      <img src={props.thumbnail} alt={`${props.title} thumbnail`} />
      <Box>
        {props.tags.map((tag, index) => {
          return <Chip key={index} label={tag} color="primary" sx={{ width: "80px", margin: "5px 10px", borderRadius: "10px"}} />;
        })}
      </Box>

    </Box>
  );
}
