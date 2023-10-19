import { Box, Card, Divider, Typography, useMediaQuery } from "@mui/material";
import "./style.css";

export default function HomeView() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ display: isSmallScreen ? "block" : "flex", marginBottom: "40px" }}>
        <Typography variant="h2" margin="7px" fontWeight={"bold"}>
          Contact me
        </Typography>
      </Box>

      <Divider />

      <Typography variant="body1" color="white" margin={"20px"} sx={{}}>
        Feel free to contact me for any additional information
      </Typography>
      <Box style={{ display: "flex" }}>
        <Card className="contactCard">
          <h3>
            LinkedIn: <a href="https://www.linkedin.com/in/thomas-mauran/">thomas-mauran</a>
          </h3>
        </Card>
        <Card className="contactCard">
          <h3>Email: thomas.mauran@etu.umontpellier.fr</h3>
        </Card>
        <Card className="contactCard">
          <h3>Phone: +33 6 95 15 48 70</h3>
        </Card>
      </Box>
    </Box>
  );
}
