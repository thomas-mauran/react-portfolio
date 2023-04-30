import { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon sx={{color: "#FFF",  fontSize: "1.3em"}}/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
          }
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
            <HomeIcon sx={{margin: "3px 10px", color: "#FFF"}}/>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
              Home
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/about" style={{ textDecoration: "none", display: "flex" }}>
          <AccountBoxIcon sx={{margin: "3px 10px", color: "#FFF"}}/>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
              About me
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact" style={{ textDecoration: "none", display: "flex" }}>
          <AlternateEmailIcon sx={{margin: "3px 10px", color: "#FFF"}}/>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
              Contact
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
