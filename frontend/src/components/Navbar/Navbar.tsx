import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Link to="/" style={{margin: "20px", fontSize: "1.3em"}}>
        Home
      </Link>
      <Link to="/about" style={{margin: "20px", fontSize: "1.3em"}}>
        About me
      </Link>
      <Link to="/contact" style={{margin: "20px", fontSize: "1.3em"}}>
        Contact
      </Link>
    </Box>
  );
}
