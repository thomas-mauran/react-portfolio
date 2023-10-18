import { Box, Typography, useMediaQuery } from "@mui/material";

export default function ErrorView() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img src="https://media2.giphy.com/media/ASy3PKVFnk7ZK/giphy.gif?cid=ecf05e47cvhgnya7ib5gl7uep2wbklk9dk5mmb212htrt4sh&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="not found gif ghibli" style={{ borderRadius: "10px" }} />
      <Box sx={{ display: isSmallScreen ? "block" : "flex", marginBottom: "20px" }}>
      <Typography
          variant="h2"
          margin="10px"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(135deg, rgba(65,26,247,1) 0%, rgba(149,158,255,1) 0%, rgba(66,26,236,1) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}>
          404
        </Typography>
        <Typography variant="h2" margin="10px" fontWeight={"bold"}>
          page not found
        </Typography>
      </Box>
      <Typography variant="body1" color="white" margin={"20px"} sx={{fontSize: "1.2em"}}>
        Bring me back to the{" "}
        <a href="/home" style={{ color: "#535bf2", textDecoration: "underline" }}>
          Home page
        </a>
      </Typography>
    </Box>
  );
}
